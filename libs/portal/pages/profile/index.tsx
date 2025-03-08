import type { UserDetails } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { patchUser } from '@cuhacking/portal/features/profile/api/user'
import { Layout } from '@cuhacking/portal/ui/layout'

export function ProfilePage({ user }: { user: UserDetails }) {
  async function handleSubmit(
    values: z.infer<any>,
    isComplete: boolean,
    cookie: string | null,
    apiUrl: string,
  ) {
    const action = isComplete ? 'create' : 'update'
    try {
      const response = await patchUser(values as UserDetails, cookie, apiUrl, user.id)
      if (response.error) {
        throw new Error(`Failed to ${action} profile`)
      }
      return new Response(`Successfully ${action} profile`, { status: 200 })
    }
    catch (error) {
      console.error(
        'Profile submission error - libs/portal/features/profile/ui/questions.tsx',
        error,
      )
      return new Response(`Failed to ${action} profile`, { status: 400 })
    }
  }
  const status = !!user.emergencyContactEmail

  return (
    <Layout isCompleteProfile={status}>
      <div className="px-2.5 py-5">
        <Header
          isComplete={status}
          firstName={user.firstName || ''}
          lastName={user.lastName || ''}
          avatarUrl={user.avatar?.url || ''}
        />
        <Questions onSubmit={handleSubmit} status={status} user={user} />
      </div>
    </Layout>
  )
}
