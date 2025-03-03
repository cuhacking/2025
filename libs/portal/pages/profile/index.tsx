/* import type { User } from '@cuhacking/portal/types/user' */
import type * as z from 'zod'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { Layout } from '@cuhacking/portal/ui/layout'

export function ProfilePage({ user, onSubmit }: { user: User, onSubmit: (values: z.infer<any>, status: string) => void }) {
  return (
    <Layout user={user}>
      <div className="px-2.5 py-5">
        <Header
          status="complete"
          firstName={user.firstName || ''}
          lastName={user.lastName || ''}
          avatarUrl={user.avatar.url || ''}
        />
        <Questions onSubmit={onSubmit} status="incomplete" user={user} />
      </div>
    </Layout>
  )
}
