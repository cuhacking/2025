import type { User } from '@cuhacking/portal/types/user'
import { Registration } from '@cuhacking/portal/features/registration/ui/registration'
import { Layout } from '@cuhacking/portal/ui/layout'

export function RegistrationPage({ user }: { user: User }) {
  return (
    <Layout user={user}>
      <Registration />
    </Layout>
  )
}
