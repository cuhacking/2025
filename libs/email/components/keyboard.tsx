/* import process from 'node:process' */
import { Img } from '@react-email/components'

/* const baseUrl = process.env.ASSET_URL || 'http://localhost:3000' */
/* const baseUrl = process.env.CUHACKING_2025_EMAIL_TEMPLATES_SITE_LOCAL_URL */

export function Keyboard() {
  return (
    <div>
      {/* Image Section */}
      <div className="flex justify-center">
        <Img
          src="https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/cuhacking/media/keyboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWhhY2tpbmcvbWVkaWEva2V5Ym9hcmQucG5nIiwiaWF0IjoxNzQwOTEwMzM5LCJleHAiOjE3NzI0NDYzMzl9.I7WASWsZtIGfac67CbSRrMrIPrx0kYY8BgzOYl_A4Ok"
          alt="Keyboard Image"
          className="w-full max-w-xl h-auto mx-auto"
        />
      </div>
    </div>
  )
}
