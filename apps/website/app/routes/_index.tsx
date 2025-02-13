import type { MetaFunction } from 'remix'
import { Home } from '@website/pages/home'

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | cuHacking' },
    {
      property: 'og:title',
      content: 'Home | cuHacking',
    },
    {
      name: 'description',
      content: 'cuHacking\'s hackathon is coming to you March 14th',
    },
  ]
}

export default function Index() {
  return (
    <Home />
  )
}
