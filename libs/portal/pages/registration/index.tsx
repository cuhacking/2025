import type { UserDetails } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { Registration } from '@cuhacking/portal/features/registration/ui/registration'
import { postForm } from '@cuhacking/portal/shared/features/form/api'
import { Layout } from '@cuhacking/portal/ui/layout'
import { useLoaderData } from '@remix-run/react'
import { toast } from 'sonner'

export function RegistrationPage({ user }: { user: UserDetails }) {
  const { cookie, API_URL } = useLoaderData<{ cookie: string | null, API_URL: string }>()
  async function handleSubmit(values: z.infer<any>) {
    const toastMessage = 'Successfully Registered'
    const loadingToastId = toast.loading('Please wait...')
    let response
    try {
      const formatedValues = Object.entries(values).map(([field, value]) => ({
        field,
        value: Array.isArray(value)
          ? value.map(item => item.value)
          : value,
      }))

      const refinedValues = [...formatedValues, { field: 'submittedBy', value: '6' }]
      response = await postForm(refinedValues, cookie, API_URL, user.id)

      if (response.error) {
        return new Response('Couldn\'t register user for hackathon', { status: 400 })
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
      toast.error(`Failed to register. Please try again.`)
      // example until we hook up BE
      return new Response(`Failed to register`, { status: 400 })
    }
  }

  return (
    <Layout isCompleteProfile={!!user.emergencyContactFullName}>
      <Registration onSubmit={handleSubmit} />
    </Layout>
  )
}
