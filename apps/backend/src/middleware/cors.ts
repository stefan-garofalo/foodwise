import { cors } from 'hono/cors'

export const corsMiddleware = cors({
	origin: [process.env.NEXT_PUBLIC_FRONTEND_URL!],
	allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowHeaders: ['Content-Type', 'Authorization'],
	credentials: true,
	maxAge: 600
})
