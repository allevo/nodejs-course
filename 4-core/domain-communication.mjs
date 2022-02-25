'use strict'

import EventEmitter from 'events'


class UserDomain {
    constructor(ee) {
        this.ee = ee;
    }

    async registerUser(userData) {
        console.log('registerUser', userData)
        // Faccio la registrazione (ie db etc...)

        const id = 42;
        this.ee.emit('userRegistered', id, userData)
        // marketingDomain.sendWelcomeEmail()
    }

    async setUserAsActive(userId) {
        console.log('setUserAsActive()', userId)
        // update DB

        throw new Error('KABOOM')
    }
}

class MarketingDomain {
    constructor(ee) {
        this.ee = ee;
    }

    async sendWelcomeEmail({ email, userId, name, surname }) {
        console.log('sendWelcomeEmail', { email, userId, name, surname })
        // Invio email
    }

    async traceOpenedWelcomeEmail(userId) {
        console.log('traceOpenedWelcomeEmail', userId)
        // Faccio cose

        this.ee.emit('welcomeEmailOpened', userId)
        // userDomain.setUserAsActive()
    }
}

const ee = new EventEmitter()
const userDomain = new UserDomain(ee)
const marketingDomain = new MarketingDomain(ee)

ee.on('userRegistered', (userId, userData) => {
    marketingDomain.sendWelcomeEmail({ userId, ...userData })
        .catch(e => console.log('error', e))
})
ee.on('welcomeEmailOpened', userId => {
    userDomain.setUserAsActive(userId)
        .catch(e => console.log('error', e))
})


await userDomain.registerUser({
    email: 'tomallevi@gmail.com',
    name: 'tommaso',
    surname: 'allevi'
})
console.log('ENDED, registerUser')

await marketingDomain.traceOpenedWelcomeEmail(42)
console.log('ENDED, traceOpenedWelcomeEmail')

