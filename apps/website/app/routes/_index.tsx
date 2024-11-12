import type { MetaFunction } from '@netlify/remix-runtime'
import NxWelcome from '../nx-welcome'

export const meta: MetaFunction = () => {
  return [
    { title: 'cuHacking 2025' },
    { name: 'description', content: 'Carleton University\'s Official Hackathon.' },
  ]
}

export default function Index() {
  return (
    <div>
      <NxWelcome title="Website" />
    </div>
  )
}
