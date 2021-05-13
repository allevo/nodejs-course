'use strict'

setImmediate(function handler() {
    console.log('setImmediate')
})
setTimeout(function handler() {
    console.log('setTimeout')
})