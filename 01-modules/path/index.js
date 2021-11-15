// Path moduli fayl va katalog yo'llari bilan ishlash uchun yordamchi dasturlarni taqdim etadi.
const path = require('path');

// console.log(__filename);
/*
Result:
/run/media/ilosrim/6F7BB5A2075FBAE5/Documents/github/codahiri/nodejs-darslari/01-modules/path/index.js
*/

// == parse() ===
const pathObj = path.parse(__filename);
console.log(pathObj);
/*
Result:
  {
    root: '/',
    dir: '/run/media/ilosrim/6F7BB5A2075FBAE5/Documents/github/codahiri/nodejs-darslari/01-modules/path',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }
*/

// == basename() ==
const basenamePath = path.basename('/run/media/ilosrim/6F7BB5A2075FBAE5/Documents/github/codahiri/nodejs-darslari/01-modules/path/index.js', '.js');
console.log(basenamePath);

// == join() ==
const joinPath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(joinPath);

// == normalize() ==
const normalizePath = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log(normalizePath);