import type { User } from '@cuhacking/portal/types/user'
import dashboard_left from '@cuhacking/portal/assets/backgrounds/dashboard-bg-left.webp'
import dashboard_right from '@cuhacking/portal/assets/backgrounds/dashboard-bg-right.webp'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { Toaster } from '@cuhacking/shared/ui/sonner'

export function ProfilePage({ user }: { user: User }) {
  return (
    <div className="px-2.5 py-5 m-auto max-w-screen-xl">
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

      <Header
        status={user.profileStatus}
        firstName={user.details.firstName || ''}
        lastName={user.details.lastName || ''}
        avatarUrl={user.details.avatar || ''}
      />
      <Questions status={user.profileStatus} user={user.details} />
    </div>
  )
}
