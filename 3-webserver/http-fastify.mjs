import fastify from 'fastify'

const server = fastify({ logger: 'info' })

server.get('/foo', function (req) {
    req.log.info('foo request incoming')
    return 'WOW!!'
})

server.listen(3000)
