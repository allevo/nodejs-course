'use strict'

const fs = require('fs')

const s = fs.createReadStream('./package.json', {highWaterMark: 64 * 1024})

console.log(s)

s.on('data', d => {
    console.log(d)
})