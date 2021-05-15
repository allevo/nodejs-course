'use strict'

const fs = require('fs')

fs.readFile('./package.json', function (err, data) {
    console.log('async', err, data)
})
fs.readFile('./bhooooo', function (err, data) {
    console.log('async', err, data)
})

const b = fs.readFileSync('./package.json')
console.log('sync', b)

try {
    fs.readFileSync('./bhooooo')
} catch(e) {
    // Error: ENOENT: no such file or directory, open './bhooooo'
}

fs.readdir('.', function (err, files) {
    console.log('read-dir', err, files)
})
