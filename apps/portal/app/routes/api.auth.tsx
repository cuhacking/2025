/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  return redirect(`${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL}`)
}

export default function AuthRedirect() {
  return null
}
