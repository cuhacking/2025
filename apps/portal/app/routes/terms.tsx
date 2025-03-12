import type { LoaderData } from '@cuhacking/portal/types/legal'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { getLegalData } from '@cuhacking/portal/features/legal/api/data'
import { updateTerms } from '@cuhacking/portal/features/legal/api/update-terms'
import { getCurrentUser } from '@cuhacking/portal/features/profile/api/user'
import { LegalPage } from '@cuhacking/portal/pages/legal'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const { legalData } = getLegalData()

  const API_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

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
  const API_URL
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

  const cookie = request.headers.get('Cookie')
  const user = await getCurrentUser({ cookie, API_URL })

  if (!user) {
    return redirect('/')
  }

  return await updateTerms(user.id, cookie)
}

export default function Index() {
  const { legalData } = useLoaderData<LoaderData>()
  return <LegalPage legalData={legalData} />
}
