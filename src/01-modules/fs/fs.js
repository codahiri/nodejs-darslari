const fs = require('fs');

// sinxron usul
/*
const files = fs.readdirSync('./');
console.log(files);
*/

// asinxron usul
/*
fs.readdir('../', (err, files) => {
  if (err) throw err;
  console.log(files);
})
*/

/*
fs.readFile('fs.js', 'utf-8', (err, res) => {
  if (err) throw err;
  console.log(res);
})
*/

// write file

/*
fs.writeFile('app.js', 'Hello', (err, res) => {
  if (err) throw err;
  console.log('Soccessful!');
})
*/

// rename file
/*
fs.rename('app.js', 'apps.js', (err, res) => {
  if (err) throw err;
  console.log('Soccess!');
})
*/

// unlik - delete
fs.unlink('app.js', (err) => {
  if (err) throw err;
  console.log('successful!');
})