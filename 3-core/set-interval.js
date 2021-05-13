'use strict'

setInterval(function handler () {
    console.log('setInterval', 1000)
}, 1000)

setInterval(function handler () {
    console.log('setInterval', 500)
}, 500)


const id = setInterval(function handler () {
    console.log('setInterval', 10)
}, 10)

setInterval(function handler () {
    clearInterval(id)
}, 100)