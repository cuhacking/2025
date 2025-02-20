import type { User } from '@cuhacking/portal/types/user'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { Toaster } from '@cuhacking/shared/ui/sonner'

export function ProfilePage({ user }: { user: User }) {
  return (
    <div className="px-2.5 py-5 m-auto max-w-screen-xl">
      <Toaster />
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
