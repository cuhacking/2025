import { Layout } from '@cuhacking/portal/ui/layout'
import { QRCodeCanvas } from 'qrcode.react'

export function QrPage({ user }) {
  /* console.log(user) */
  const qrValue = 'https://yourwebsite.com' // Change this to your desired URL or text
  return (
    <Layout isCompleteProfile={false}>
      <section className="max-w-screen-xl mx-auto gap-5 p-5 sm:px-10 py-40 pt-20">
        <div>
          <QRCodeCanvas value={qrValue} size={200} />
          Hi
          {' '}
          {user.preferredDisplayName}
          {' '}
          ur doing great!
        </div>
      </section>
    </Layout>
  )
}
