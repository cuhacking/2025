import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import '@cuhacking/shared/ui/global.css'

export const meta: MetaFunction = () => [
  {
    title: 'cuHacking 2025',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth scroll-pt-16 overflow-x-hidden font-mono"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="!pointer-events-auto">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
