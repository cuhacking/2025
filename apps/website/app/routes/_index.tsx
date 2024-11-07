import type { MetaFunction } from '@netlify/remix-runtime'
import NxWelcome from '../nx-welcome'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <NxWelcome title="Website" />
    </div>
  )
}
