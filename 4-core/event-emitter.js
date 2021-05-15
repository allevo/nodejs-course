'use strict'

const EventEmitter = require('events')


console.log('---- event emitter ----')
const myEmitter = new EventEmitter()
myEmitter.on('event', () => {
    console.log('event-cbk1')
});
myEmitter.on('event', () => {
    console.log('event-cbk2')
});
myEmitter.on('event', () => {
    console.log('event-cbk3')
});
myEmitter.emit('event')


console.log('\n\n---- with args ----')
myEmitter.on('event-with-args', (a, b, c) => {
    console.log('event-with-args', a, b, c)
});
myEmitter.emit('event-with-args', 1, 2, 3)


console.log('\n\n---- sync ----')
myEmitter.on('new-ev', () => {
    console.log('new-ev')
});
console.log('before new-ev')
myEmitter.emit('new-ev')
console.log('after new-ev')
