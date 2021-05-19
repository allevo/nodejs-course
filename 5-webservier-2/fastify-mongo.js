'use strict'

const fastify = require('fastify')({
    logger: 'info'
})

fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017/mydb'
})

fastify.post('/:collectionName', {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    insertedId: { type: 'string' }
                }
            }
        }
    }
}, async function (req) {
    const db = this.mongo.db
    const coll = db.collection(req.params.collectionName)

    const obj = await coll.insertOne(req.body)

    return obj
})

fastify.get('/:collectionName', async function (req) {
    const db = this.mongo.db
    const coll = db.collection(req.params.collectionName)

    const objs = await coll.find(req.body).toArray()

    return objs
})

fastify.listen(3000)
