// import type { LoaderFunction } from '@remix-run/node'
// import process from 'node:process'
import { ChallengesPage } from '@cuhacking/portal/pages/challenges'
// import { useLoaderData } from '@remix-run/react'

// export const loader: LoaderFunction = async () => {
//   try {
//     const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://axiom.cuhacking.ca'
//     const req = await fetch(`${API_URL}/api/challenges`)

//     if (!req.ok) {
//       throw new Error('Error')
//     }

//     // const { res } = await req.json()

//     const data = { title: '', pathTitle: '', symbol: {}, challengeBlock: [] }

//     //console.log(data)

//     return {
//       title: data.title,
//       pathTitle: data.pathTitle,
//       symbol: data.symbol,
//       challengeBlock: data.challengeBlock
//     }
//   }
//   catch () {
//     console.error(`Error fetching challenges`)
//     return { title: '', pathTitle: '', symbol: {}, challengeBlock: [] }
//   }
// }

export default function Challenges() {
  // const data = useLoaderData<typeof loader>()

  return (
    <ChallengesPage />
  )
}
