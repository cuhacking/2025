import type { LoaderData } from '@cuhacking/portal/types/legal'
import type { User } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import { getLegalData } from '@cuhacking/portal/features/legal/api/data'
import { LegalPage } from '@cuhacking/portal/pages/legal'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  const legalData = getLegalData()
  return json<LoaderData>(legalData)
}

export default function Index() {
  const { legalData } = useLoaderData<LoaderData>()
  const user = useLoaderData<User>()

  return <LegalPage legalData={legalData} user={user} />
}
