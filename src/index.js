// Require the framework and instantiate it
const mongoose = require('mongoose')
const routes = require('./routes')
const fastify = require('fastify')({ logger: true })
const swagger = require('./swagger')

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
fastify.register(require('fastify-swagger'), swagger.options)

// Require external modules

routes.forEach((route, index) => {
  fastify.route(route)
 })


 // Connect to DB
mongoose.connect('mongodb://localhost/mycargarage', { useUnifiedTopology: true, useNewUrlParser: true  })
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()