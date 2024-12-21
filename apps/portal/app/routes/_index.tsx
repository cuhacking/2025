import { useLoaderData } from '@remix-run/react'

export async function loader() {
  const response = await fetch('http://localhost:3001/social-links')
  const { docs } = await response.json()

  const links = docs.map(link => link.platform || link.text)
  return Response.json(links)
}

export default function Index() {
  const links = useLoaderData()

  return (
    <div>
      <h1>Social Links</h1>
      <ul>
        {links.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  )
}
