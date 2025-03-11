/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  const adminURL
    = process.env.NODE_ENV === 'development'
      ? `${process.env.CUHACKING_2025_AXIOM_LOCAL_URL}/admin/logout`
      : `${process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}/admin/logout`

  return redirect(adminURL)
}
