/* import process from 'node:process' */
import { Img } from '@react-email/components'

/* const baseUrl = process.env.ASSET_URL || 'http://localhost:3000' */
/* const baseUrl = process.env.CUHACKING_2025_EMAIL_TEMPLATES_SITE_LOCAL_URL */

export function Keyboard({ keyboardSrc }: { keyboardSrc: string }) {
  return (
    <div>
      {/* Image Section */}
      <div className="flex justify-center">
        <Img
          src={keyboardSrc}
          alt="Keyboard Image"
          className="w-full max-w-xl h-auto mx-auto"
        />
      </div>
    </div>
  )
}
