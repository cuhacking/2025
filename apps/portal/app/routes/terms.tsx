import type { LoaderData } from '@cuhacking/portal/types/legal'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { getLegalData } from '@cuhacking/portal/features/legal/api/data'
import { updateTerms } from '@cuhacking/portal/features/legal/api/update-terms'
import { getCurrentUser } from '@cuhacking/portal/features/profile/api/user'
import { LegalPage } from '@cuhacking/portal/pages/legal'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getSession } from '../sessions'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const { legalData } = getLegalData()

  const baseUrl
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

  const API_URL = baseUrl
  const user = await getCurrentUser({ cookie, API_URL })

  if (!user) {
    return redirect('/')
  }

  if (user.agreedToTerms) {
    return redirect('/')
  }

  return json<LoaderData>({ legalData, cookie })
}

export const action: ActionFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const session = await getSession(cookie)
  const userId = session.get('userId')

  if (!userId) {
    return redirect('/login')
  }
  return await updateTerms(userId, cookie)
}

export default function Index() {
  const { legalData } = useLoaderData<LoaderData>()
  return <LegalPage legalData={legalData} />
}
