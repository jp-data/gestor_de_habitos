import { FastifyInstance } from 'fastify'
import { prisma } from "./lib/prisma"
import { z } from 'zod'
import dayjs from 'dayjs'

export async function appRoutes(app: FastifyInstance) {

    //adiciona um hábito
    app.post('/habits', async (request) => {
        //zod para validar dados
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })

        const { title, weekDays } = createHabitBody.parse(request.body)

        //permitindo inserir um hábito que passe a valer no mesmo dia
        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                created_at: new Date(),
                weekDays: {
                    create: weekDays.map( weekDay => {
                        return {
                            week_day: weekDay,
                        }
                    })
                }
            }
        })


    })
}

