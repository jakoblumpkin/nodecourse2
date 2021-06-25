const EventEmitter = require('events');
const { setImmediate } = require('timers');

const myEmitter = new EventEmitter();

setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});


myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_Event was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_Event was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_Event was fired');
});
