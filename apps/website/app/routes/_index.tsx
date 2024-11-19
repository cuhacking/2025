import type { MetaFunction } from '@netlify/remix-runtime'
import HomePage from '@cuhacking/ui/pages/website/index'

export const meta: MetaFunction = () => {
  return [
    { title: 'cuHacking 2025' },
    { name: 'description', content: 'Carleton University\'s Official Hackathon.' },
  ]
}
export default function Index() {
  return (
    <HomePage />
  )
}
