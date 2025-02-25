import type { User } from '@cuhacking/portal/types/user'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { Layout } from '@cuhacking/portal/ui/layout'

export function ProfilePage({ user }: { user: User }) {
  return (
    <Layout user={user}>
      <div className="px-2.5 py-5">
        <Header
          status={user.profileStatus}
          firstName={user.details.firstName || ''}
          lastName={user.details.lastName || ''}
          avatarUrl={user.details.avatar || ''}
        />
        <Questions status={user.profileStatus} user={user.details} />
      </div>
    </Layout>
  )
}
