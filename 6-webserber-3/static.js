'use strict'

const fastify = require('fastify');
const path = require('path')

const app = fastify();

app.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

app.get('/', (request, reply) => {
  reply.render('index.pug', { title: 'Hey', message: 'Hello GET /!' });
});
 
app.listen(3000, (error) => {
  if (error) throw error
})
