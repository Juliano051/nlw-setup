import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import cors from "@fastify/cors"
const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/saude', async () => {
    const habits = await prisma.habit.findMany(
        /*{
        where:{
            title: {
                contains: 'Dormir' 
            }
        }
    }*/)
    return habits
})

app.listen({
    port: 3333
}).then(()=>{
    console.log("server running...")
})