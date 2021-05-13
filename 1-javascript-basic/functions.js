'use strict'

function simpleFunction() { console.log(arguments) }

function functionWithAnArgument(firstArgument) { console.log(firstArgument) }

function functionWithDefaultArgument(arg = 4) { console.log(arg) }

function functionWithDestructor({ a, b }) { console.log(a, b) }

function functionWithDestructorAndDefault({ a, b = 6 }) { console.log(a, b) }

function functionWithDestructorAndDefault2({ a, b = 6 } = {}) { console.log(a, b) }

function functionWithDestructorAndRest({ a, ...other } = {}) { console.log(a, other) }


console.log('---- simpleFunction ----')
simpleFunction()
simpleFunction(2)

console.log('\n\n---- functionWithAnArgument ----')
functionWithAnArgument(6)
functionWithAnArgument(6, 7)
functionWithAnArgument()

console.log('\n\n---- functionWithDefaultArgument ----')
functionWithDefaultArgument(6)
functionWithDefaultArgument()
functionWithDefaultArgument(6, 7)

console.log('\n\n---- functionWithDestructor ----')
functionWithDestructor({ a: 5, b: true })
functionWithDestructor({ a: 5, b: true, c: 'string' })
functionWithDestructor({ a: 5 })
functionWithDestructor({})

try {
    functionWithDestructor()
} catch(e) {
    // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
}

console.log('\n\n---- functionWithDestructorAndDefault ----')
functionWithDestructorAndDefault({ a: 5, b: true })
functionWithDestructorAndDefault({ a: 5, b: true, c: 'string' })
functionWithDestructorAndDefault({ a: 5 })


console.log('\n\n---- functionWithDestructorAndDefault2 ----')
functionWithDestructorAndDefault2({ a: 5, b: true })
functionWithDestructorAndDefault2({ a: 5, b: true, c: 'string' })
functionWithDestructorAndDefault2({ a: 5 })
functionWithDestructorAndDefault2({})
functionWithDestructorAndDefault2()

console.log('\n\n---- functionWithDestructorAndRest ----')
functionWithDestructorAndRest({ a: 5, b: true })
functionWithDestructorAndRest({ a: 5, b: true, c: 'string' })
functionWithDestructorAndRest({ a: 5, })