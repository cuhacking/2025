import type * as z from 'zod'
import { useRegistrationSchema } from '@cuhacking/portal/features/registration/hooks/use-registration-schema'
import { AuthenticationField } from '@cuhacking/portal/shared/features/form/ui/authentication-field'
import { ComboboxField } from '@cuhacking/portal/shared/features/form/ui/combobox-field'
import { MultiSelectField } from '@cuhacking/portal/shared/features/form/ui/multi-select-field'
import { TextAreaField } from '@cuhacking/portal/shared/features/form/ui/text-area-field' // Ensure this is correct
import { Provider } from '@cuhacking/shared/types/auth'
import { Button } from '@cuhacking/shared/ui/button'
import { Typography } from '@cuhacking/shared/ui/typography'
import { useNavigate } from '@remix-run/react'
import { useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { CHALLENGE_INTERESTS, DISCOVERY_SOURCES, QNX_EXPERIENCE, WORKSHOP_INTERESTS } from '../constants'

const AUTH_LINK = {
  GITHUB: 'https://github.com',
}

interface RegistrationPropse {
  onSubmit: (values: z.infer<any>) => Promise<Response>
}
export function Registration({ onSubmit }: RegistrationPropse) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const initialSocialMediaHandles = {
    gitHub: '',
  }

  const navigate = useNavigate()

  const [socialMediaHandles, _setSocialMediaHandles] = useState<
    typeof initialSocialMediaHandles
  >(initialSocialMediaHandles)

  const { registration, isValid, isDirty } = useRegistrationSchema()

  async function handleSubmit(values: z.infer<any>) {
    setIsLoading(true)
    const res = await onSubmit(values)
    if (res.status === 200) {
      navigate('/dashboard')
    }
    setIsLoading(false)
  }

  return (
    <div className="max-w-screen-xl sm:px-6 md:px-8 mx-auto flex flex-col px-2.5 py-5 gap-y-2.5">
      <div className="flex flex-col p-4 gap-y-1.5">
        <Typography variant="h4" className="font-bold">cuHacking 6 Registration Form</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">
          We really want to see you there!
        </Typography>
      </div>

      <FormProvider {...registration}>
        <form method="post" className="flex flex-col gap-y-4 w-full px-4 pb-6" onSubmit={registration.handleSubmit(handleSubmit)}>

          <AuthenticationField
            provider={Provider.gitHub}
            link={AUTH_LINK.GITHUB}
            userTag={socialMediaHandles.gitHub}
            isRequired
          />

          <MultiSelectField
            className="z-4"
            form={registration}
            name="what-challenge-are-you-most-interested-in"
            label="What challenge are you most interested in?"
            options={CHALLENGE_INTERESTS}
            isRequired
          />

          <MultiSelectField
            className="z-3"
            form={registration}
            name="where-did-you-hear-about-us"
            label="Where did you hear about us?"
            options={DISCOVERY_SOURCES}
            isRequired
          />

          <MultiSelectField
            className="z-2"
            form={registration}
            name="what-workshops-would-you-like-to-see"
            label="What workshops would you like to see?"
            options={WORKSHOP_INTERESTS}
            isRequired
          />

          <ComboboxField
            form={registration}
            name="how-familiar-are-you-with-qnx"
            label="How familiar are you with QNX?"
            options={QNX_EXPERIENCE}
            isRequired
          />

          <TextAreaField
            form={registration}
            placeholder="Type here"
            name="first-time-hacker"
            label="What would you tell a first-time hacker?"
            variant="text"
            maxCharacters={500}
          />

          <Button
            className="w-fit mx-auto"
            type="submit"
            variant="secondary"
            disabled={!isValid || !isDirty || isLoading}
          >
            <Typography variant="h6">Register</Typography>
          </Button>

        </form>
      </FormProvider>
    </div>
  )
}
