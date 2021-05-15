'use strict'


function returnResolvedPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 10, 'value')
    })
}

function returnRejectedPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(reject, 10, new Error('KABOOM'))
    })
}

async function myFunc() {
    const ret = await returnResolvedPromise();
    console.log('ret', ret)

    try {
        await returnRejectedPromise()
    } catch (e) {
        // KABOOK
    }
    return ret
}

myFunc()
    .then(r => {
        console.log('end', r)
    }, e => {
        console.error('error', e)
    })