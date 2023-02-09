import fastify from 'fastify'
import { env } from './env'

const app = fastify({ logger: true })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
