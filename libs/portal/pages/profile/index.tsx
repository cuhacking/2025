import type { UserDetails } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { Header, Questions } from '@cuhacking/portal/features/profile'
import { patchUser } from '@cuhacking/portal/features/profile/api/user'
import { Layout } from '@cuhacking/portal/ui/layout'
import { toast } from 'sonner'

export function ProfilePage({ user }: { user: UserDetails }) {
  async function handleSubmit(
    values: z.infer<any>,
    isComplete: boolean,
    cookie: string | null,
    apiUrl: string,
  ) {
    const action = isComplete ? 'updated' : 'created'
    const toastMessage = `Profile ${action} successfully`
    const loadingToastId = toast.loading('Please wait...')
    try {
      const response = await patchUser(values as UserDetails, cookie, apiUrl, user.id)
      if (response.error) {
        throw new Error(`Failed to ${action} profile`)
      }

      toast.success(toastMessage, {
        id: loadingToastId,
        duration: 3000,
      })

      return new Response(toastMessage, { status: 200 })
    }
    catch (error) {
      console.error(
        'Profile submission error - libs/portal/features/profile/ui/questions.tsx',
        error,
      )

      toast.error(`Failed to ${action} profile. Please try again.`, {
        id: loadingToastId,
        duration: 3000,
      })

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
        <Questions onSubmit={handleSubmit} isComplete={status} user={user} />
      </div>
    </Layout>
  )
}
