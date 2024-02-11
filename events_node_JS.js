const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
    console.log('Please turn off the motor');
    setTimeout(()=>{
        console.log('Please turn off the motor! It is Reminder');
    }, 3000)
});

console.log("The script is running");
console.log("The script is still running");
myEmitter.emit('waterFull');