// Events

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener chaqirildi!', arg);
});

logger.log('messsage2')

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener() {
//   console.log('Helloooo! first listener');
// });
// // Second listener
// myEmitter.on('event', function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // Third listener
// myEmitter.on('event', function thirdListener(...args) {
//   const parameters = args.join(', ');
//   console.log(`event with parameters ${parameters} in third listener`);
// });

// // console.log(myEmitter.listeners('event'));

// myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
// [Function: firstListener],
// [Function: secondListener],
// [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener