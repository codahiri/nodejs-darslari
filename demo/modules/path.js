const path = require('path') 

// basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// papka nomi
console.log(path.dirname(__filename))

// kengaytma nomi
console.log(path.win32.extname(__filename))

// Obyekt
const pathObj = path.parse(__filename)
console.log(pathObj.base);

// 
console.log(path.format(pathObj))

// process env
console.log(process.env.PATH);