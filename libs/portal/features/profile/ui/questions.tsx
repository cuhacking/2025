import type { UserDetails } from '@cuhacking/portal/types/user'
import type * as z from 'zod'
import { useProfileSchema } from '@cuhacking/portal/features/profile/hooks/use-profile-schema'

import { useNumberField } from '@cuhacking/portal/shared/features/form/hooks/use-number-field'
import { AccordionHeader } from '@cuhacking/portal/shared/features/form/ui/accordion-header'
/* import { AuthenticationField } from '@cuhacking/portal/shared/features/form/ui/authentication-field' */
import { ComboboxField } from '@cuhacking/portal/shared/features/form/ui/combobox-field'
import { MonthYearField } from '@cuhacking/portal/shared/features/form/ui/month-year-field'
import { MultiSelectField } from '@cuhacking/portal/shared/features/form/ui/multi-select-field'
import { NumberField } from '@cuhacking/portal/shared/features/form/ui/number-field'
import { PhoneNumberField } from '@cuhacking/portal/shared/features/form/ui/phone-number-field'
import { RadioGroupField } from '@cuhacking/portal/shared/features/form/ui/radio-group-field'
import { TextField } from '@cuhacking/portal/shared/features/form/ui/text-field'
/* import { Provider } from '@cuhacking/shared/types/auth' */
import { IconVariant } from '@cuhacking/shared/types/icon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { Checkbox } from '@cuhacking/shared/ui/checkbox'
import { Form, FormLabel } from '@cuhacking/shared/ui/form'
import { Typography } from '@cuhacking/shared/ui/typography'
import { useLoaderData, useNavigate } from '@remix-run/react'
import { useState } from 'react'
import {
  /* AUTH_LINK, */
  EDUCATION,
  GENDER,
  RELATIONSHIPS,
  RESTRICTIONS,
  YEAR_STANDINGS,
} from '../constants'

interface ProfileFormProps {
  user: Partial<UserDetails>
  isComplete: boolean
  onSubmit: (values: z.infer<any>, isComplete: boolean, cookie: string | null, apiUrl: string) => Promise<Response>
}

/* const initialSocialMediaHandles = {
*   discord: '',
*   instagram: '',
*   gitHub: '',
*   behance: '',
* } */

export function Questions({ user, isComplete, onSubmit }: ProfileFormProps) {
  const [isStudent, setIsStudent] = useState<boolean>(!!user.expectedGraduationDate)
  // will setup the social media handler once BE is up
  /* const [socialMediaHandles, _setSocialMediaHandles] = useState<
*   typeof initialSocialMediaHandles
* >(initialSocialMediaHandles) */
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { cookie, API_URL } = useLoaderData<{ cookie: string, API_URL: string }>()

  const {
    profile,
    profileSchema: _profileSchemaType,
    isValid,
  } = useProfileSchema(user, isStudent)

  const {
    handleIncrement: handleIncrementAge,
    handleDecrement: handleDecrementAge,
    onChange: onChangeAge,
  } = useNumberField(profile, 'age')

  const navigate = useNavigate()

  async function handleSubmit(values: z.infer<any>) {
    setIsLoading(true)
    const refinedAllergies = values.allergies.map((allergy: { value: string, option: string }) =>
      allergy.value,
    )
    const refinedDietaryRestrictions = values.dietaryRestrictions.map((restriction: { value: string, option: string }) =>
      restriction.value,
    )

    const refinedValues = { ...values, dietaryRestrictions: refinedDietaryRestrictions, allergies: refinedAllergies }
    const res = await onSubmit(refinedValues, false, cookie, API_URL)
    setIsLoading(false)
    if (res.status === 200 && !isComplete) {
      navigate('/dashboard')
    }
  }

  const buttonMessage = isComplete ? 'Update Profile' : 'Create Profile'
  const disabled = !isValid || isLoading

  return (
    <Form {...profile}>
      <form onSubmit={profile.handleSubmit(handleSubmit)}>
        <div className="py-6 px-4 flex flex-col justify-center items-center gap-2.5 w-full">
          <Accordion type="multiple" className="w-full col-span-full ">
            <AccordionItem value="personal">
              <AccordionTrigger aria-label="Personal" className="pt-5 pb-1.5 border-b border-white flex justify-between items-center w-full cursor-pointer hover:no-underline">
                <AccordionHeader
                  name="Personal"
                  iconVariant={IconVariant.profile}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <div className="pt-4 min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <TextField
                    variant="text"
                    name="firstName"
                    form={profile}
                    label="First Name"
                    isRequired
                    placeholder="John"
                    info={(
                      <p>
                        Note: This information is coming from LinkedIn
                      </p>
                    )}
                    infoIcon="linkedin"
                    isDisabled
                  />
                  <TextField
                    variant="text"
                    name="lastName"
                    form={profile}
                    label="Last Name"
                    isRequired
                    placeholder="Doe"
                    info={(
                      <p>
                        Note: This information is coming from LinkedIn
                      </p>
                    )}
                    infoIcon="linkedin"
                    isDisabled
                  />
                  {/* <TextField
                    variant="text"
                    placeholder="K."
                    name="middleName"
                    form={profile}
                    label="Middle Name"
                    info={(
                      <p>
                        Note: This information is coming from LinkedIn
                      </p>
                    )}
                    infoIcon="linkedin"
                    isDisabled
                  /> */}
                  <TextField
                    variant="email"
                    form={profile}
                    name="email"
                    placeholder="john.doe@gmail.com"
                    label="Email"
                    isRequired
                    info={(
                      <p>
                        Note: This information is coming from LinkedIn
                      </p>
                    )}
                    infoIcon="linkedin"
                    isDisabled
                  />
                  <TextField
                    variant="text"
                    name="preferredDisplayName"
                    form={profile}
                    label="Preferred Display Name"
                    isRequired
                    placeholder="John"
                  />
                  {/* <RadioGroupField
                    name="tShirtSize"
                    label="T-Shirt Size"
                    options={TSHIRT_SIZES}
                    form={profile}
                    info={(
                      <p>
                        See sizing details&nbsp;
                        <a
                          className="underline text-blue-400"
                          href="https://www.printparrot.ca/blank_product/244070331/Softstyle-T-Shirt"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          here
                        </a>
                      </p>
                    )}
                  /> */}
                  <ComboboxField
                    form={profile}
                    name="gender"
                    label="Gender"
                    isRequired
                    options={GENDER}
                  />
                  <NumberField
                    name="age"
                    value={profile.watch('age') as number}
                    form={profile}
                    onChange={onChangeAge}
                    label="Age"
                    isRequired
                    handleIncrement={handleIncrementAge}
                    handleDecrement={handleDecrementAge}
                  />
                  {/* </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <ComboboxField
                    form={profile}
                    name="currentResidence"
                    label="Current Residence"
                    isRequired
                    options={COUNTRY_LIST}
                  /> */}
                  <TextField
                    placeholder="https://drive.google.com/resume"
                    label="Resume Link (PDF Required)"
                    variant="link"
                    form={profile}
                    name="resumeLink"
                    isRequired
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="education">
              <AccordionTrigger aria-label="Education" className="pt-5 pb-1.5 border-b cursor-pointer border-white flex justify-between items-center w-full hover:no-underline">
                <AccordionHeader
                  name="Education"
                  iconVariant={IconVariant.education}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4 pt-4">
                <div className="flex gap-3 items-center">
                  <Checkbox
                    checked={isStudent}
                    onCheckedChange={(checked) => {
                      if (typeof checked !== 'boolean') {
                        setIsStudent(false)
                      }
                      else {
                        setIsStudent(checked || false)
                      }
                    }}
                    className="size-6 border-white/50 bg-transparent"
                  />
                  <FormLabel
                    onClick={() => setIsStudent(prev => !prev)}
                  >
                    <Typography variant="paragraph-base">
                      I am currently a student
                    </Typography>
                  </FormLabel>
                </div>

                {isStudent && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full auto-rows-auto">
                      <ComboboxField
                        form={profile}
                        name="degree"
                        label="Degree"
                        isRequired
                        options={EDUCATION.LEVEL_OF_STUDY}
                      />
                      <ComboboxField
                        form={profile}
                        name="fieldOfStudy"
                        label="Field of Study"
                        isRequired
                        options={EDUCATION.FIELD_OF_STUDY}
                      />
                      <ComboboxField
                        form={profile}
                        name="institution"
                        label="Institution"
                        isRequired
                        options={EDUCATION.SCHOOLS}
                      />
                      <RadioGroupField
                        name="yearStanding"
                        label="Year Standing"
                        options={YEAR_STANDINGS}
                        isRequired
                        form={profile}
                      />
                      <MonthYearField
                        form={profile}
                        name="expectedGraduationDate"
                        label="Expected Graduation Date"
                        isRequired
                      />
                    </div>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="z-50 relative overflow-y-visible"
              value="restrictions"
            >
              <AccordionTrigger aria-label="Restrictions" className="pt-5 pb-1.5 border-b border-white flex justify-between items-center cursor-pointer w-full hover:no-underline">
                <AccordionHeader
                  name="Restrictions"
                  iconVariant={IconVariant.shield}
                />
              </AccordionTrigger>
              <AccordionContent className="overflow-y-visible grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto pt-4">
                <div className="z-40">
                  <MultiSelectField
                    form={profile}
                    name="dietaryRestrictions"
                    label="Dietary Restrictions"
                    options={RESTRICTIONS.DIETARY}
                  />
                </div>
                <div className="z-30">
                  <MultiSelectField
                    form={profile}
                    name="allergies"
                    label="Allergies"
                    options={RESTRICTIONS.ALLERGIES}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="relative" value="contact">
              <AccordionTrigger aria-label="Contact" className="cursor-pointer pt-5 pb-1.5 border-b border-white flex justify-between items-center w-full hover:no-underline">
                <AccordionHeader
                  name="Contact"
                  iconVariant={IconVariant.contactBook}
                />
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto">
                  <PhoneNumberField
                    form={profile}
                    name="phoneNumber"
                    label="Phone Number"
                    isRequired
                  />
                  <TextField
                    variant="link"
                    placeholder="https://john.dev"
                    name="website"
                    form={profile}
                    label="Website"
                  />
                  {/* <AuthenticationField
                    provider={Provider.discord}
                    link={AUTH_LINK.DISCORD}
                    userTag={socialMediaHandles.discord}
                  /> */}
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="socialMedia">
              <AccordionTrigger aria-label="Social Media" className="cursor-pointer pt-5 pb-1.5 border-b border-white flex justify-between items-center w-full hover:no-underline">
                <AccordionHeader
                  name="Social Media"
                  iconVariant={IconVariant.cellPhone}
                />
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto">
                  <AuthenticationField
                    userTag={socialMediaHandles.instagram}
                    provider={Provider.instagram}
                    link={AUTH_LINK.INSTAGRAM}
                  />
                  <AuthenticationField
                    userTag={socialMediaHandles.behance}
                    provider={Provider.behance}
                    link={AUTH_LINK.BEHANCE}
                  />
                  <TextField
                    variant="link"
                    placeholder="https://john.dev"
                    name="website"
                    form={profile}
                    label="Website"
                  />
                </div>
              </AccordionContent>
            </AccordionItem> */}
            <AccordionItem value="emergencyContact">
              <AccordionTrigger aria-label="Emergency Contact" className="cursor-pointer pt-5 pb-1.5 border-b border-white flex justify-between items-center w-full hover:no-underline">
                <AccordionHeader
                  name="Emergency Contact"
                  iconVariant={IconVariant.warning}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto">
                  <TextField
                    form={profile}
                    placeholder="John Doe"
                    name="emergencyContactFullName"
                    label="Full Name"
                    variant="text"
                    isRequired
                  />
                  <TextField
                    variant="email"
                    form={profile}
                    placeholder="johndoe@gmail.com"
                    name="emergencyContactEmail"
                    label="Email"
                    isRequired
                  />
                  <ComboboxField
                    form={profile}
                    name="emergencyContactRelationship"
                    label="Relationship"
                    isRequired
                    options={RELATIONSHIPS}
                  />
                  <PhoneNumberField
                    form={profile}
                    name="emergencyContactPhoneNumber"
                    label="Phone Number"
                    isRequired
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="privacySettings">
              <AccordionTrigger className="pt-5 pb-1.5 border-b border-white flex justify-between items-center w-full hover:no-underline">
                <AccordionHeader
                  name="Privacy"
                  iconVariant={IconVariant.lock}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4 pt-4">
                <CheckboxField
                  form={profile}
                  name="isPublicProfile"
                  label="Public Profile"
                />
                <CheckboxField
                  form={profile}
                  name="isPublicResume"
                  label="Public Resume"
                />
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
        <div className="px-4 flex justify-center pb-6">
          <Button
            disabled={disabled}
            variant="secondary"
            type="submit"
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          >
            <Typography variant="h6">{buttonMessage}</Typography>
          </Button>

        </div>
      </form>
    </Form>
  )
}
