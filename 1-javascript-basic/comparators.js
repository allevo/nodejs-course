'use strict'

var one = 1
var two = 2
var secondOne = 1

// Equal
console.log('---- equal ----')
console.log("one === secondOne", one === secondOne)
console.log("one === two", one === two)
console.log("null === null", null === null)
console.log("undefined === undefined", undefined === undefined)
console.log("null === undefined", null === undefined)
console.log("NaN === NaN", NaN === NaN)
console.log("{} === {}", {} === {})
var a = {}
var b = a
console.log("a === b", a === b)

// Disequal
console.log('---- disequal ----')
console.log("one !== secondOne", one !== secondOne)
console.log("one !== two", one !== two)
console.log("NaN !== NaN", NaN !== NaN)

// comparators
console.log('---- comparator ----')
console.log("one > secondOne", one > secondOne)
console.log("one >= secondOne", one >= secondOne)
console.log("one < secondOne", one < secondOne)
console.log("one <= secondOne", one <= secondOne)

// comparators
console.log('---- == ----')
console.log("1 == 1", 1 == 1)
console.log("null == 0", null == 0)
console.log("undefined == 0", undefined == 0)
console.log("undefined == null", undefined == null)
console.log("'0' == 0", '0' == 0)
console.log("'0' == null", '0' == null)
console.log("'0' == undefined", '0' == undefined)

console.log("NaN == NaN", NaN == NaN)

console.log('\n\n---- Shame ----')
console.log("'' == 0", 0 == '')
console.log("0 == '0'", 0 == '0')
console.log("'' == '0'", '' == '0')
