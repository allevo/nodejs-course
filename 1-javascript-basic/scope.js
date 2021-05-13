
var int = 4
function closure() {
    console.log(int)
}
function closureWithOverwrite() {
    var int = 'string'
    console.log(int)
}

console.log('---- closure ----')
closure()
closureWithOverwrite()


console.log('---- strict ----')
function logThis() {
    console.log(this)
}
logThis()


function logThisStrict() {
    'use strict'
    console.log(this)
}
logThisStrict()

console.log('\n\n---- Hoisting ----')
invokeBeforeTheDeclaration()
function invokeBeforeTheDeclaration() {}

console.log('\n\n---- arrow function ----')
const globalThis = this
const arrow = () => {
    console.log(this, this === globalThis)
}
arrow()

try {
    arrow2()
} catch (e) {
    // ReferenceError: Cannot access 'arrow2' before initialization
}
const arrow2 = () => {}

console.log('\n\n---- let, const ----')

let mutableVar = 3
mutableVar = 5
mutableVar = 'and type'

const constantrVar = 5
try {
    constantrVar = 7
} catch(e) {
    // TypeError: Assignment to constant variable.
}

const obj = {}
obj.a = 'foo' // still possible!!
console.log(obj)
try {
    obj = 7
} catch(e) {
    // TypeError: Assignment to constant variable.
}
