'use strict'

console.log('---- if ----')
var int = 0
if (int === 0) {
    console.log('here!!')
}

if (int == 0) {
} else {
    console.log('really not')
}

if (int) {
    console.log('really not')
} else {
    console.log('here!!')
}

console.log('\n\n---- while ----')
while (int < 10) {
    console.log(int)
    int++
}

console.log('\n\n---- for ----')
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('\n\n---- for in obj ----')
var obj = {a: 1, b: '2'}
for (var k in obj) {
    console.log(k)
}

console.log('\n\n---- for in instance ----')
class K {
    constructor() {
        this.foo = 1
        this.bar = 'string'
    }
    m() {}
}
var instance = new K()
for (var k in instance) {
    console.log(k)
}

console.log('\n\n---- for in arr ----')
var arr = [1, 2, 3, 'string']
for (var index in arr) {
    console.log(index)
}
console.log('\n\n---- for of arr ----')
var arr = [1, 2, 3, 'string']
for (var value of arr) {
    console.log(value)
}

try {
    for (var k of obj) {}
} catch (e) {
    // TypeError: obj is not iterable
}

console.log("Object.keys(obj)", Object.keys(obj))
console.log("Object.keys(instance)", Object.keys(instance))
console.log("Object.keys(arr)", Object.keys(arr))
