'use strict'

class Class1 {
    constructor(value) {
        this.foo = value
    }
    method() {
        console.log(this.foo)
    }
}

var instance1 = new Class1(1)
var instance2 = new Class1(1)

console.log('---- instance equality ----')
console.log("instance1 === instance2", instance1 === instance2)
console.log("instance1 == instance2", instance1 == instance2)

instance1.method() // 1

var method = instance1.method;
try {
    method();
} catch(e) {
    // TypeError: Cannot read property 'foo' of undefined
}

var bound = method.bind(instance1)
bound() // 1

console.log(instance1.__proto__.method === Class1.prototype.method) // true

console.log('\n\n---- extends ----')
class Class2 extends Class1 {
    constructor(otherValue) {
        super(4)
        this.bar = otherValue
    }
    method() {
        console.log('bar', this.bar)
    }
}

var instance3 = new Class2('string')
instance3.method()

console.log(instance3.__proto__.method === Class1.prototype.method) // false
console.log(instance3.__proto__.method === Class2.prototype.method) // true
console.log(instance3.__proto__.__proto__.method === Class1.prototype.method) // true
