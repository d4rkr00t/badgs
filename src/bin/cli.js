#! /usr/bin/env node

import fs from 'fs';
import Badgs from './../lib/';

const args = process.argv.slice(2);
const usage = 'Usage: subject status color [-o output.svg]';
const badgs = new Badgs();

let [subject, status, color, o, output] = args; // eslint-disable-line

if (subject && status && color) {
  if (o && !output) {
    output = o;
    color = '';
  }

  const filename = output || `${subject}-${status}-${color}.svg`;

  fs.writeFile(filename, badgs.render(subject, status, color), 'utf-8', () => {
    console.log(`Badge created: ${filename}`); // eslint-disable-line

    process.exit(0); // eslint-disable-line
  });
} else {
  console.error(usage); // eslint-disable-line

  process.exit(1); // eslint-disable-line
}
