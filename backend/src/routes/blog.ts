import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@vikramiyer/medium-common";
import { authMiddleware } from "../authMiddleware";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>().basePath('/blog')

blogRouter.use("/*", authMiddleware)

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Invalid input"
        })
    }
    const authorId = c.get("userId")
    const prisma = getPrisma(c.env.DATABASE_URL)

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const { success } = updateBlogInput.safeParse(body)
    if (!success) {
        c.status(400)
        return c.json({
            message: "Invalid input"
        })
    }
    const prisma = getPrisma(c.env.DATABASE_URL)

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

	return c.json({
        id: blog.id
    })
})

// TODO: add pagenatioin
blogRouter.get('/bulk', async (c) => {
	const prisma = getPrisma(c.env.DATABASE_URL)
    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    return c.json({
        blogs
    })
})


blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id')
	const prisma = getPrisma(c.env.DATABASE_URL)

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        
        return c.json({
            blog
        })
    } catch (e) {
        c.status(404)
        return c.json({
            message: "Error while fetching blog post"
        })
    }
})
