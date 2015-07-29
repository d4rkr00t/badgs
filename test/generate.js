import Badgs from '../src';
import fs from 'fs';

const badg = new Badgs();

fs.writeFileSync('flat-small.svg', badg.render('a', 'b', 'lightgrey'), 'utf-8');
fs.writeFileSync('flat-review.svg', badg.render('review', 'not started', 'lightgrey'), 'utf-8');
fs.writeFileSync('flat-build-failed.svg', badg.render('build', 'failed', 'red'), 'utf-8');
fs.writeFileSync('flat-build-passed.svg', badg.render('build', 'passed', 'green'), 'utf-8');
fs.writeFileSync('flat-build-success.svg', badg.render('build', 'success', 'green'), 'utf-8');
fs.writeFileSync('flat-build-inaccessible.svg', badg.render('build', 'inaccessible', 'lightgrey'), 'utf-8');
fs.writeFileSync('flat-test-2-2.svg', badg.render('tests', '2 / 2', 'green'), 'utf-8');
fs.writeFileSync('flat-coverage-83.svg', badg.render('coverage', '83%', 'yellowgreen'), 'utf-8');
fs.writeFileSync('flat-coverage-100.svg', badg.render('coverage', '100%', 'green'), 'utf-8');
fs.writeFileSync('flat-tech-debt.svg', badg.render('tech debt', '0.4%', 'green'), 'utf-8');
fs.writeFileSync('flat-downloads.svg', badg.render('downloads', '2k [atom-amd64.deb]', 'green'), 'utf-8');
fs.writeFileSync('flat-downloads2.svg', badg.render('downloads', '258k latest version', 'green'), 'utf-8');
fs.writeFileSync('flat-chocolately.svg', badg.render('chocolately', 'v1.9.5.20150320', 'blue'), 'utf-8');
fs.writeFileSync('flat-opt-deps.svg', badg.render('optionalDependencies', 'up-to-date', 'yellow'), 'utf-8');
fs.writeFileSync('flat-python.svg', badg.render('python', '2, 2.7, 3, 3.2, 3.3, 3.4', 'lightblue'), 'utf-8');
