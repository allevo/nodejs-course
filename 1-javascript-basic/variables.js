'use strict'

/* comment */
// other comment

var number = 1
var string = 'the string'
var otherString = `
multiline string
other line
`
var ᾩ = "strange name"

var boolean = true
var nonValue = null
var undefinedValue = undefined

// objects
var emptyObject = {}

var object = {
    key: 'value',
    2: 'the key are always a string',
    [string]: 'the "string" variable value is used for the object key',
    undefined: undefined,
    null: null
}

console.log('----object----')
console.log(object['key']) // is equal to 'value'
console.log(object.key) // is equal to 'value'
console.log(object[2]) // is equal to 'the key are always a string'
console.log(object[string])
console.log(object['undefined']) // undefined
console.log(object['null']) // null

console.log(object['unknown key']) // undefined

console.log('\n\n----hasOwnProperty----')
console.log(object.hasOwnProperty('undefined')) // true
console.log(object.hasOwnProperty('unknown key')) // false


var objectWithComma = {
    key: 'value',
    2: 'the key are always a string', // last item has a comma!!
}


// arrays
var emptyArray = []

var array = [1, 2, 3]
var mixedArray = [2, true, null, undefined, {}, [], "the-string", otherString, number]

console.log('\n\n----array----')
console.log(array[0]) // 1
console.log(array[2]) // 3
console.log(array[3]) // undefined

