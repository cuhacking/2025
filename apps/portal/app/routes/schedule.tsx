import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { SchedulePage } from '@cuhacking/portal/pages/schedule'

export const loader: LoaderFunction = async () => {
  try {
    const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://axiom.cuhacking.ca'
    const req = await fetch(`${API_URL}/api/challenges`)

    if (!req.ok) {
      throw new Error('Error')
    }

    const data = await req.json()

    return data.docs
  }
  catch (error) {
    console.error(`Error fetching challenges`, error)
  }
}

export default function Schedule() {
  // const data = useLoaderData<typeof loader>()

  return (
    <SchedulePage />
  )
}
