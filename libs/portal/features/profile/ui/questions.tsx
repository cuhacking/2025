import type { UserDetails } from '@cuhacking/portal/types/user';
import type * as z from 'zod';
import { UserProfileStatus } from '@cuhacking/portal/types/user';
import {
  patchUser,
  postUser,
} from '@cuhacking/portal/features/profile/api/user';
import { useProfileSchema } from '@cuhacking/portal/features/profile/hooks/use-profile-schema';
import { useNumberField } from '@cuhacking/portal/shared/features/form/hooks/use-number-field';
import { AccordionHeader } from '@cuhacking/portal/shared/features/form/ui/accordion-header';
import { AuthenticationField } from '@cuhacking/portal/shared/features/form/ui/authentication-field';
import { CheckboxField } from '@cuhacking/portal/shared/features/form/ui/checkbox-field';
import { ComboboxField } from '@cuhacking/portal/shared/features/form/ui/combobox-field';
import { DateField } from '@cuhacking/portal/shared/features/form/ui/date-field';
import { MultiSelectField } from '@cuhacking/portal/shared/features/form/ui/multi-select-field';
import { NumberField } from '@cuhacking/portal/shared/features/form/ui/number-field';
import { PhoneNumberField } from '@cuhacking/portal/shared/features/form/ui/phone-number-field';
import { RadioGroupField } from '@cuhacking/portal/shared/features/form/ui/radio-group-field';
import { TextField } from '@cuhacking/portal/shared/features/form/ui/text-field';
import { Provider } from '@cuhacking/shared/types/auth';
import { IconVariant } from '@cuhacking/shared/types/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cuhacking/shared/ui/accordion';
import { Button } from '@cuhacking/shared/ui/button';
import { Checkbox } from '@cuhacking/shared/ui/checkbox';
import { Form, FormLabel } from '@cuhacking/shared/ui/form';
import { Typography } from '@cuhacking/shared/ui/typography';
import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  AUTH_LINK,
  EDUCATION_CONSTANTS,
  GENDER_CONSTANTS,
  RELATIONSHIPS,
  RESTRICTIONS,
  TSHIRT_SIZES,
} from '../constants';

interface ProfileFormProps {
  user: Partial<UserDetails>;
  status: UserProfileStatus;
}

export function Questions({ user, status }: ProfileFormProps) {
  const [isStudent, setIsStudent] = useState<boolean>(false);

  const {
    profile,
    profileSchema: _profileSchemaType,
    isDirty,
    isValid,
  } = useProfileSchema(user, isStudent);

  const {
    handleIncrement: handleIncrementYearStanding,
    handleDecrement: handleDecrementYearStanding,
    onChange: onChangeYearStanding,
  } = useNumberField(profile, 'yearStanding');

  const {
    handleIncrement: handleIncrementAge,
    handleDecrement: handleDecrementAge,
    onChange: onChangeAge,
  } = useNumberField(profile, 'age');

  function onSubmit(values: z.infer<typeof _profileSchemaType>) {
    try {
      if (status === UserProfileStatus.notComplete) {
        postUser(values);
      } else {
        patchUser(values);
      }
    } catch (error) {
      console.error(
        'Profile submission error - libs/portal/features/profile/ui/questions.tsx',
        error,
      );
      const action =
        status === UserProfileStatus.complete ? 'update' : 'create';
      toast.error(`Failed to ${action} profile. Please try again.`);
    }
  }

  return (
    <Form {...profile}>
      <form onSubmit={profile.handleSubmit(onSubmit)}>
        <div className="py-6 px-4 bg-black flex flex-col justify-center items-center gap-2.5 w-full">
          <Accordion type="multiple" className="w-full col-span-full">
            <AccordionItem value="personal">
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
                <AccordionHeader
                  name="Personal"
                  iconVariant={IconVariant.profile}
                />
              </AccordionTrigger>
              <AccordionContent className="pt-4 min-h-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                <TextField
                  variant="text"
                  name="firstName"
                  form={profile}
                  label="First Name"
                  isRequired
                  placeholder="John"
                  isDisabled
                />
                <TextField
                  variant="text"
                  name="lastName"
                  form={profile}
                  label="Last Name"
                  isRequired
                  placeholder="Doe"
                  isDisabled
                />
                <TextField
                  variant="text"
                  placeholder="K."
                  isDisabled
                  name="middleName"
                  form={profile}
                  label="Middle Name"
                />
                <TextField
                  variant="text"
                  name="preferredDisplayName"
                  form={profile}
                  label="Preferred Display Name"
                  isRequired
                  placeholder="John"
                  isDisabled
                />
                <TextField
                  variant="email"
                  form={profile}
                  name="email"
                  placeholder="john.doe@gmail.com"
                  label="Email"
                  isRequired
                  isDisabled
                />

                <RadioGroupField
                  name="tShirtSize"
                  label="T-Shirt Size"
                  options={TSHIRT_SIZES}
                  isRequired
                  form={profile}
                  info={
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
                  }
                />
                <ComboboxField
                  form={profile}
                  name="gender"
                  label="Gender"
                  isRequired
                  options={GENDER_CONSTANTS}
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
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="education">
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
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
                        setIsStudent(false);
                      } else {
                        setIsStudent(checked || false);
                      }
                    }}
                    className="w-6 h-6 border-white/50 bg-transparent"
                  />
                  <FormLabel
                    onClick={() => setIsStudent((prev) => !prev)}
                    className="text-white text-sm font-normal font-mono leading-tight"
                  >
                    I am a student
                  </FormLabel>
                </div>

                {isStudent && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-auto">
                      <ComboboxField
                        form={profile}
                        name="degree"
                        label="Degree"
                        isRequired
                        options={EDUCATION_CONSTANTS.LEVEL_OF_STUDY}
                      />
                      <ComboboxField
                        form={profile}
                        name="fieldOfStudy"
                        label="Field of Study"
                        isRequired
                        options={EDUCATION_CONSTANTS.FIELD_OF_STUDY}
                      />
                      <ComboboxField
                        form={profile}
                        name="institution"
                        label="Institution"
                        isRequired
                        options={EDUCATION_CONSTANTS.SCHOOLS}
                      />
                      <NumberField
                        name="yearStanding"
                        value={profile.watch('yearStanding')}
                        form={profile}
                        onChange={onChangeYearStanding}
                        label="Year Standing"
                        isRequired
                        handleIncrement={handleIncrementYearStanding}
                        handleDecrement={handleDecrementYearStanding}
                      />
                    </div>
                    <DateField
                      form={profile}
                      name="expectedGraduationDate"
                      label="Expected Graduation Date"
                      isRequired
                    />
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="z-50 relative overflow-y-visible"
              value="restrictions"
            >
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
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
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
                <AccordionHeader
                  name="Contact"
                  iconVariant={IconVariant.contactBook}
                />
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto">
                  <AuthenticationField
                    provider={Provider.discord}
                    link={AUTH_LINK.DISCORD}
                  />
                  <PhoneNumberField
                    form={profile}
                    name="phoneNumber"
                    label="Phone Number"
                    isRequired
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="socialMedia">
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
                <AccordionHeader
                  name="Social Media"
                  iconVariant={IconVariant.cellPhone}
                />
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full auto-rows-auto">
                  <AuthenticationField
                    provider={Provider.instagram}
                    link={AUTH_LINK.INSTAGRAM}
                  />
                  <AuthenticationField
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
            </AccordionItem>
            <AccordionItem value="emergencyContact">
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
                <AccordionHeader
                  name="Emergency Contact"
                  iconVariant={IconVariant.warning}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-auto">
                  <TextField
                    form={profile}
                    placeholder="John"
                    name="emergencyContactFirstName"
                    label="First Name"
                    variant="text"
                    isRequired
                  />
                  <TextField
                    variant="text"
                    form={profile}
                    placeholder="Doe"
                    name="emergencyContactLastName"
                    label="Last Name"
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
            <AccordionItem value="privacySettings">
              <AccordionTrigger className="h-12 pt-3.5 pb-1.5 border-b border-white flex justify-between items-center w-full">
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
            </AccordionItem>
          </Accordion>
        </div>
        <div className="px-4 flex justify-center pb-6">
          <Button
            disabled={!isDirty || !isValid}
            variant="secondary"
            type="submit"
          >
            <Typography variant="h6">save</Typography>
          </Button>
        </div>
      </form>
    </Form>
  );
}
