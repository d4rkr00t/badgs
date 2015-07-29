import Badgs from '../src';
import fs from 'fs';

const badg = new Badgs();

fs.writeFileSync('flat-percent.svg', badg.render('flat', '80%', 'blue'), 'utf-8');
fs.writeFileSync('flat.svg', badg.render('flat', 'badge', 'green'), 'utf-8');
