'use strict'

const fastify = require('fastify');
const fastifyPug = require('fastify-pug');
 
const app = fastify();
app.register(fastifyPug, {views: 'views'});

app.get('/', (request, reply) => {
  reply.render('index.pug', { title: 'Hey', message: 'Hello GET /!' });
});

app.get('/:filename', (request, reply) => {
  reply.render(request.params.filename + '.pug', { title: 'Hey', message: 'Hello GET ' + request.params.filename });
});
app.setErrorHandler((error, request, reply) => {
  reply.render('notfound.pug');
})
 
app.listen(3000, (error) => {
  if (error) throw error
})
