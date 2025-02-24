import process from 'node:process'
import { Img } from '@react-email/components'

const baseUrl = process.env.ASSET_URL || 'http://localhost:3000'

export function EmailKeyboard() {
  return (
    <div>
      {/* Image Section */}
      <div className="flex justify-center">
        <Img
          src={`${baseUrl}/static/keyboard.png`}
          alt="Keyboard Image"
          className="w-full max-w-xl h-auto mx-auto"
        />
      </div>
    </div>
  )
}
