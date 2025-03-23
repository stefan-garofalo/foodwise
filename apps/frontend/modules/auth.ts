import { auth } from '@clerk/nextjs/server'

export type AuthContext = Awaited<ReturnType<typeof auth>>
