import { Context } from "hono"
import { verify } from "hono/jwt"

export const authMiddleware = async (c: Context<any>, next: () => Promise<void>) => {
    const authHeader = c.req.header("authorization") || ""
    const token = authHeader.split(' ')[1]
    try {
        const user = await verify(token, c.env.JWT_SECRET)
        c.set("userId", user.id as string)
        await next()
    } catch (e) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
}