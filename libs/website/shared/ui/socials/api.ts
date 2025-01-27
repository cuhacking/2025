import type { SocialLink } from '../../../../../apps/cms/src/payload-types'

export async function getSocialLinks() {
  const apiUrl = import.meta.env.VITE_CMS_URL
  const query = `
    query {
      SocialLinks {
        docs {
          url
          platform
          primaryIcon {
            url
            alt
          }
          secondaryIcon {
            url
            alt
          }
        }
      }
    }
`
  try {
    const response = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const socialLinks: Array<SocialLink> = data.data.SocialLinks.docs.map((social: SocialLink) => {
      return {
        url: social.url,
        platform: social.platform,
        mediaGreen: {
          src: `${apiUrl}${social.primaryIcon.url}`,
          alt: social.primaryIcon.alt,
        },
        mediaWhite: {
          src: `${apiUrl}${social.primaryIcon.url}`,
          alt: social.primaryIcon.alt,
        },
      }
    })
    return socialLinks
  }
  catch (error) {
    print('HIIII')
    console.error(error)
  }
}
