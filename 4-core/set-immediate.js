'use strict'

setImmediate(function handler () {
    console.log('setImmediate', 1)
})

setImmediate(function handler () {
    console.log('setImmediate', 2)
})
