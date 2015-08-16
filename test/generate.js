import Badgs from '../src/lib';
import fs from 'fs';
import path from 'path';

const dir = 'generated';
const html = 'index.html';
const imgsList = [];
const badg = new Badgs();
const badgesList = [
  { name: 'flat-small', params: ['a', 'b', 'lightgrey'] },
  { name: 'flat-review', params: ['review', 'not started', 'lightgrey'] },
  { name: 'flat-build-failed', params: ['build', 'failed', 'red'] },
  { name: 'flat-build-passed', params: ['build', 'passed', 'green'] },
  { name: 'flat-build-success', params: ['build', 'success', 'green'] },
  { name: 'flat-build-inaccessible', params: ['build', 'inaccessible', 'lightgrey'] },
  { name: 'flat-test-2-2', params: ['tests', '2/2', 'green'] },
  { name: 'flat-coverage-83', params: ['coverage', '83%', 'yellowgreen'] },
  { name: 'flat-coverage-100', params: ['coverage', '100%', 'green'] },
  { name: 'flat-tech-debt', params: ['tech debt', '0.4%', 'green'] },
  { name: 'flat-downloads', params: ['downloads', '2k [atom-amd64.deb]', 'green'] },
  { name: 'flat-downloads2', params: ['downloads', '258k latest version'] },
  { name: 'flat-chocolately', params: ['chocolately', 'v1.9.5.20150320', 'blue'] },
  { name: 'flat-opt-deps', params: ['optionalDependencies', 'up-to-date', 'yellow'] },
  { name: 'flat-python', params: ['python', '2, 2.7, 3, 3.2, 3.3, 3.4', 'lightblue'] },
  { name: 'flat-platform', params: ['platform', 'ios | osx', 'lightblue'] },

  { name: 'flat-only-slim', params: ['lllllllllllllllllllllll', 'iiiiiiiiiiiiiiiiii', 'lightblue'] },
  { name: 'flat-only-punctuation', params: ['..............', ',;:.,.,\'\'\"', 'orange'] },

  // UPPERCASE
  { name: 'flat-licens-apache', params: ['license', 'MIT/Apache-2.0', 'blue'] },
  { name: 'flat-licens-mit', params: ['license', 'MIT', 'blue'] },
  { name: 'flat-licens-bsd', params: ['license', 'BSD', 'blue'] },
  { name: 'flat-libscore', params: ['libscore', 'NaN', 'blue'] },
  { name: 'flat-talk-node', params: ['talk', 'Talk-node-sdk', 'blue'] },
  { name: 'flat-code-quality', params: ['code-quality', 'C', 'yellowgreen'] }
];

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

badgesList.forEach(badge => {
  const filename = badge.name + '.svg';
  imgsList.push(`<img src='${filename}' />`);

  fs.writeFileSync(path.join(dir, filename), badg.render.apply(badg, badge.params), 'utf-8');
  console.log('Generated: ' + filename); // eslint-disable-line
});

fs.writeFileSync(path.join(dir, html), imgsList.join('<div style="margin-top: 6px;"></div>'), 'utf-8');
