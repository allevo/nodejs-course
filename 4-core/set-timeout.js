'use strict'

setTimeout(function handler () {
    console.log('setTimeout', 10)
}, 10)


setTimeout(function handler () {
    console.log('setTimeout', 1)
}, 1)

setTimeout(function handler () {
    console.log('setTimeout', 0)
}, 0)


function doSomething (a, b) {
    console.log('doSomething', a, b)
}
setTimeout(doSomething, 100, 1, 2)

const id = setTimeout(function handler () {
    console.log('never called')
}, 0)

clearTimeout(id)

