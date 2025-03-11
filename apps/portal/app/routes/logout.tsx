/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  const adminURL
    = process.env.NODE_ENV === 'development'
      ? `http://localhost:8000/admin/logout`
      : `http://axiom.cuhacking.ca/admin/logout`

  return redirect(adminURL)
}
