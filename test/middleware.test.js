import http from 'http';
import request from 'supertest';

import middleware from '../src/lib/middleware';

function createServer(badgs) {
  const _middleware = middleware(badgs);

  return http.createServer(function (req, res) {
    _middleware(req, res, function (err) {
      res.statusCode = err ? (err.status || 500) : 200;
      res.end(err ? err.message : JSON.stringify(req.body));
    });
  });
}

function responseCheck(expected) {
  return function (res) {
    if (res.body.toString() !== expected) {
      throw new Error(`Response body should be equal to "${expected}" but it's "${res.body.toString()}"`);
    }
  };
}

describe('badgs middleware', function () {
  let server;

  const badgs = {
    render(subject, status, color) {
      return `${subject}, ${status}, ${color}`;
    }
  };

  beforeEach(function () {
    server = createServer(badgs);
  });

  it('should skip middleware if not svg', function (done) {
    request(server)
      .get('/')
      .expect(200, '', done);
  });

  it('should response with correct content type', function (done) {
    request(server)
      .get('/subject-status-color.svg')
      .expect('Content-Type', 'image/svg+xml;charset=utf-8')
      .expect(200, done);
  });

  it('should call badgs render with correct status, subject, color for simple url', function (done) {
    request(server)
      .get('/subject-status-color.svg')
      .expect(200)
      .expect(responseCheck('subject, status, color'))
      .end(done);
  });

  it('should replace -- to -', function (done) {
    request(server)
      .get('/sub--ject-status-color.svg')
      .expect(200)
      .expect(responseCheck('sub-ject, status, color'))
      .end(done);
  });

  it('should replace _ to space', function (done) {
    request(server)
      .get('/sub_ject-status-color.svg')
      .expect(200)
      .expect(responseCheck('sub ject, status, color'))
      .end(done);
  });

  it('should replace __ to _', function (done) {
    request(server)
      .get('/sub__ject-status-color.svg')
      .expect(200)
      .expect(responseCheck('sub_ject, status, color'))
      .end(done);
  });
});
