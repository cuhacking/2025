import type { GenericEmailContent } from '../types/content'
import Generic from '../emails/generic'

const genericEmailConstants: GenericEmailContent = {
  title: 'Thank you for applying for cuHacking, Hasith',
  body: [
    {
      text: 'Your application has been received and is under review. The team will get back to you ASAP!',
    },
    {
      buttonText: 'RSVP',
      buttonLink: 'https://portal.cuhacking.ca/',
      text: 'See you there!',

    },
  ],
}

export default function Preview() {
  return (
    <Generic {...genericEmailConstants} />
  )
}
