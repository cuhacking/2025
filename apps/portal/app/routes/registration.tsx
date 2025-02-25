import type { LoaderFunction } from '@remix-run/node'
import { getCurrentUser } from '@cuhacking/portal/features/profile/api/user'
import { RegistrationPage } from '@cuhacking/portal/pages/registration'
import { getFormSubmission, patchForm, postForm } from '@cuhacking/portal/shared/features/form/api'
import { useLoaderData } from '@remix-run/react'
import { toast } from 'sonner'

// mock data
export function loader() {
  const formData = getFormSubmission('1', '2')
  const userData = getCurrentUser()
  return { formData, userData }
}

async function handleSubmit(values: z.infer<any>) {
  const status = 'notRegistered'
  const loadingToastId = toast.loading('Please wait...')
  try {
    let response
    if (status === 'notRegistered') {
      response = await postForm(values)
    }
    else {
      response = await patchForm(values)
    }
    let toastMessage
    if (status === 'notRegistered') {
      toastMessage = `Successfully registered!`
    }
    else {
      toastMessage = `Successfully edited registration!`
    }
    toast.success(toastMessage, {
      id: loadingToastId,
      duration: 3000,
    })
    return response
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

export default function Registration() {
  const data = useLoaderData<LoaderFunction>()

  return <RegistrationPage onSubmit={handleSubmit} user={data.userData} />
}
