import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

// Create the main Hono app
const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>().basePath("/api/v1");

app.use('/*', cors())

app.route('/', userRouter)
app.route('/', blogRouter)

export default app;

