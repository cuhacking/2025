import type { User } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { Layout } from '@cuhacking/portal/ui/layout'

export function ProfilePage({ user, onSubmit }: { user: User, onSubmit: (values: z.infer<any>, status: string) => void }) {
  return (
    <Layout user={user}>
      <div className="px-2.5 py-5">
        <Header
          status={user.profileStatus}
          firstName={user.details.firstName || ''}
          lastName={user.details.lastName || ''}
          avatarUrl={user.details.avatar || ''}
        />
        <Questions onSubmit={onSubmit} status={user.profileStatus} user={user.details} />
      </div>
    </Layout>
  )
}
