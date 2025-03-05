import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Home() {
  const payload = await getPayload({ config })

  const token = await cookies()

if (!token.get('payload-token')?.value) {
  return redirect(
    process.env.NODE_ENV === 'development'
      ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL
      : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL
  )
}

  try {
    const { user } = await payload.auth.verifyJWT(token)

    if (user) {
      redirect('/admin')
    }
  } catch (error) {
    console.error('Auth error:', error)
    redirect(
    process.env.NODE_ENV === 'development'
      ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL
    : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL)
  }
}
