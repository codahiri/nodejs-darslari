const MyEmitter = require('events');
const emitter = new MyEmitter();

emitter.on('messageLogging', (arg) => {
  console.log('User name: ', arg.name);
})

emitter.emit('messageLogging', {
  name: 'John',
  skils: ['HTML', 'CSS', 'JavaScript', 'Python'],
  ege: 23
});