import { FastifyInstance } from 'fastify'
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {

    app.get( '/', async () => {
        //acessando os hábitos
        const habits = await prisma.habit.findMany()
    
        return habits
    
    })
}

