'use strict'

const ok = new Promise(function(resolve, reject) {
    // dsahuiadhukdhuksadhkjsdhkjsa
    setTimeout(() => {
        resolve('value')
    }, 10)
})

console.log(await ok)
console.log(ok)

const fail = new Promise(function(resolve, reject) {
    setTimeout(reject, 10, new Error('KABOOM'))
})

try {
    await fail
} catch (e) {
    // Error: KABOOM
}

const p1 = Promise.resolve(1)
const p2 = p1.then(x => x * 2)
const p3 = p2.then(x => x + 1)
console.log(await p3) // 1 * 2 + 1 = 3


async function myAsyncFunc() {
    await p1
    return 5
}


console.log(myAsyncFunc())