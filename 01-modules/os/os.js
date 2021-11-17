// OS moduli operatsion tizim bilan bog'liq yordamchi dastur usullari va xususiyatlarini taqdim etadi.
const os = require('os');

let freeMem = os.freemem();
let totalMem = os.totalmem();
let upTime = os.uptime();
let userInfo = os.userInfo();

// bytes to mg #1
function bytesToSize(bytes) {
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// bytes to mg #2
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

console.log(`
Free Memory: ${formatBytes(freeMem)}
Total Memory: ${formatBytes(totalMem)}
Update Time: ${upTime} Min 
User Info: ${userInfo.username}
`);