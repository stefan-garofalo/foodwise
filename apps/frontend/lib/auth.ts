import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

type SessionData = Record<string, unknown>
type SessionParams = {
	cookieName: string
	value: unknown
}

export async function getSessionCookie(
	cookieName: SessionParams['cookieName']
): Promise<SessionData['value']> {
	const session = await getIronSession<SessionData>(await cookies(), {
		password: process.env.IRON_SESSION_SECRET as string,
		cookieName
	})

	return session[cookieName]
}
export async function setSessionCookie({ cookieName, value }: SessionParams) {
	const session = await getIronSession<SessionData>(await cookies(), {
		password: process.env.IRON_SESSION_SECRET as string,
		cookieName
	})

	session[cookieName] = value
	await session.save()
}
