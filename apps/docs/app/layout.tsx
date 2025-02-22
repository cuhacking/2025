import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import { JetBrains_Mono } from 'next/font/google'
import '@cuhacking/docs/global.css'
/* import '@cuhacking/shared/ui/global.css' */
/* import '../../../global.css' */

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jetBrainsMono.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
