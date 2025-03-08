import type { ReactNode } from 'react'
import dashboard_left from '@cuhacking/portal/assets/backgrounds/dashboard-bg-left.webp'
import dashboard_right from '@cuhacking/portal/assets/backgrounds/dashboard-bg-right.webp'
import { Toaster } from '@cuhacking/shared/ui/sonner'
import { HackerDock } from './hackerdock'

export function Layout({ children, isCompleteProfile }: { children: ReactNode, isCompleteProfile: boolean }): React.ReactElement {
  return (
    <div>
      <Toaster />
      <img
        src={dashboard_right}
        alt=""
        className="fixed z-[-1000] top-0 right-0 w-auto h-screen object-cover opacity-50"
      />
      <img
        src={dashboard_left}
        alt=""
        className="fixed z-[-1000] top-0 left-0 w-auto h-screen object-cover opacity-50"
      />
      <main className="max-w-screen-xl pb-20 mx-auto">{children}</main>
      <HackerDock status={isCompleteProfile} />
    </div>
  )
}
