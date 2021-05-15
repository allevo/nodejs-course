import fastify from 'fastify'
import fbopdy from'fastify-formbody'
import envSchema from'env-schema'
import S from 'fluent-json-schema'


const server = fastify({
    logger: 'info',
    ajv: {
        customOptions: {
            coerceTypes: false,
        }
    }
})

server.register(fbopdy)

server.all('/inspect', function (req) {
    return {
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
        method: req.method,
    }
})

server.get('/async', async function () {
    return 'Async function works fine!'
})
server.get('/redirect', async function (_, reply) {
    reply.redirect('/home')
    // No return statement
})

server.post('/validation', {
    schema: {
        body: S.object()
            .prop('foo', S.string().required())
            .prop('bar', S.number())
            .additionalProperties(false),
        response: {
            200: S.object()
                .prop('foo', S.string().required())
                .prop('bar', S.number())
                .additionalProperties(false),
        }
    }
}, async function (req) {
    req.log.info('body', { body: req.body })
    return req.body
})

const config = envSchema({
    schema: {
        type: 'object',
        required: [ 'PORT' ],
        properties: {
            PORT: {
                type: 'string'
            }
        }
    }
})

server.listen(config.PORT)
