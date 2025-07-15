import { getUser } from '@/modules/auth/lib/server/session'

export default async function HomePage() {
  return (
    <div className="grow px-container pb-12">
      home page protected {(await getUser()).name}
    </div>
  )
}
