import { cors } from 'hono/cors'

export const corsMiddleware = cors({
	origin: [process.env.NEXT_PUBLIC_FRONTEND_URL!],
	allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowHeaders: [
		'Content-Type',
		'Authorization',
		'trpc-accept',
		'trpc-batch-mode',
		'x-trpc-source'
	],
	credentials: true,
	maxAge: 600
})
