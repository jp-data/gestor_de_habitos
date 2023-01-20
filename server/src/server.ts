import Fastify from 'fastify'
import cors from '@fastify/cors'

//acesso ao banco de dados
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

//qualquer aplicação pode consumir os dados do backend
app.register(cors)

/**
 * Método HTTP: Get, Post, Put, Delete, Patch
 */

app.get( '/', async () => {
    //acessando os hábitos
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits

})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running')
})