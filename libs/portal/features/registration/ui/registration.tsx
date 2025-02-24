import { useProfileSchema } from '@cuhacking/portal/features/profile/hooks/use-profile-schema'
import { AuthenticationField } from '@cuhacking/portal/shared/features/form/ui/authentication-field'
import { ComboboxField } from '@cuhacking/portal/shared/features/form/ui/combobox-field'
import { MultiSelectField } from '@cuhacking/portal/shared/features/form/ui/multi-select-field'
import { TextAreaField } from '@cuhacking/portal/shared/features/form/ui/text-area-field'
import { Provider } from '@cuhacking/shared/types/auth'
import { Button } from '@cuhacking/shared/ui/button'
import { Typography } from '@cuhacking/shared/ui/typography'
import { useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { RESTRICTIONS } from '../constants'

const AUTH_LINK = {
  GITHUB: 'https://github.com',
}

export function Registration() {
  const initialSocialMediaHandles = {
    gitHub: '',
  }

  const [socialMediaHandles, _setSocialMediaHandles] = useState<
    typeof initialSocialMediaHandles
  >(initialSocialMediaHandles)

  // Dummy user data (replace with actual user data)
  const user = {} // Replace this with real user data
  const isStudent = false

  // Get the form state
  const { profile: registration } = useProfileSchema(user, isStudent)

  return (
    <div className="max-w-screen-xl sm:px-6 md:px-8 mx-auto flex flex-col px-2.5 py-5 gap-y-2.5">
      <div className="flex flex-col p-4 gap-y-1.5">
        <Typography variant="h4" className="font-bold">cuHacking 6 Registration Form</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">
          We really want to see you there!
        </Typography>
      </div>

      <FormProvider {...registration}>
        <form className="flex flex-col gap-y-4 w-full px-4 pb-6">

          <AuthenticationField
            provider={Provider.gitHub}
            link={AUTH_LINK.GITHUB}
            userTag={socialMediaHandles.gitHub}

          />

          <MultiSelectField
            className="z-4"
            form={registration}
            name="challengeInterest"
            label="What challenge are you most interested in?"
            options={RESTRICTIONS.ALLERGIES}
            isRequired
          />
          <MultiSelectField
            className="z-3"
            form={registration}
            name="discoverySource"
            label="Where did you hear about us?"
            options={RESTRICTIONS.DIETARY}
            isRequired
          />
          <MultiSelectField
            className="z-2"
            form={registration}
            name="desiredWorkshops"
            label="What workshops would you like to see?"
            options={RESTRICTIONS.ALLERGIES}
            isRequired
          />

          <ComboboxField
            // className="z-1"
            form={registration}
            name="qnxExperienceLevel"
            label="How familiar are you with QNX?"
            options={RESTRICTIONS.ALLERGIES}
            isRequired
          />

          <TextAreaField
            form={registration}
            placeholder="Type here"
            name="adviceForFirstTimers"
            label="What would you tell a first-time hacker?"
            variant="text"
            isRequired
          />

          <Button
            type="submit"
            variant="secondary"
          >
            <Typography variant="h6">Register</Typography>
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
