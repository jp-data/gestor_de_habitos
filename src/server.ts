import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()


//qualquer aplicação pode consumir os dados do backend
app.register(cors)
app.register(appRoutes)

/**
 * Método HTTP: Get, Post, Put, Delete, Patch
 */
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running')
})