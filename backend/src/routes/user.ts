import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@vikramiyer/medium-common";
import { authMiddleware } from "../authMiddleware";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>().basePath('/user')

userRouter.get('/me', authMiddleware, async (c) => {
    const userId = c.get('userId')
    const prisma = getPrisma(c.env.DATABASE_URL)
    
    const user = prisma.user.findUnique({
        where: {
            id: Number(userId)
        },
    })
    
    if (!user) {
        c.status(404)
        return c.json({
            message: "User not found"
        })
    }

    return c.json({ user })
    
})

userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Invalid input"
        })
    }
    const prisma = getPrisma(c.env.DATABASE_URL)

    // zod, password hashing
    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        })

        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET)

        return c.json({jwt})
    } catch (e) {
        console.log(e)
        c.status(411)
        return c.text('User already exists')
    }
})

userRouter.post('/signin', async (c) => {
    const body = await c.req.json()
    const { success } = signinInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Invalid input"
        })
    }
    const prisma = getPrisma(c.env.DATABASE_URL)

    // zod, password hashing
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password
            }
        })
        if (!user) {
            c.status(403)
            return c.json({
                message: "Incorrect credentials"
            })
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET)

        return c.json({jwt})
    } catch (e) {
        console.log(e)
        c.status(411)
        return c.text('Invalid')
    }
})
