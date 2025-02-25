import type { User } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { Registration } from '@cuhacking/portal/features/registration/ui/registration'
import { Layout } from '@cuhacking/portal/ui/layout'

export function RegistrationPage({ user, onSubmit }: { user: User, onSubmit: (values: z.infer<any>) => Promise<Response> }) {
  return (
    <Layout user={user}>
      <Registration onSubmit={onSubmit} />
    </Layout>
  )
}
