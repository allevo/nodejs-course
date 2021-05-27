'use strict'

const fastify = require('fastify')()
const fp = require('fastify-plugin')

fastify.get('/', handler) // child1

fastify.register(async function authenticatedContext (childServer) {
  childServer.decorate('foo', 'child1')
  childServer.get('/child1', handler) // child1
})

fastify.register(async function publicContext (childServer) {
  childServer.decorate('foo', 'child2')
  
  childServer.get('/child2', handler) // child2

  childServer.register(async function grandchildContext (grandchildServer) {
    grandchildServer.decorate('foo', 'child3')
    
    grandchildServer.get('/child3', handler) // child3
  })
})
fastify.register(async function publicContext (childServer) {
  childServer.get('/child4', handler) // child1
})

async function handler() {

  return { foo: this.foo }
}

fastify.listen(3000)
