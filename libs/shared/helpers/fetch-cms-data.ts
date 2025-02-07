export async function fetchCMSData(query: string): Promise<WelcomeData | null> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  }
  catch (error) {
    console.error('Failed to fetch welcome data:', error)
    return null
  }
}
