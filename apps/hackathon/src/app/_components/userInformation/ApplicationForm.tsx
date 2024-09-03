'use client'
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import type { UserInformation } from '@prisma/client'
import { api } from '~/trpc/react'

interface ApplicationFormProps {
  session: {
    user: {
      id: string
    }
  }
}

export function ApplicationForm(props: ApplicationFormProps) {
  const [subscribe, setSubscribe] = useState<boolean>(false)
  const [formData, setFormData] = useState<UserInformation>({
    id: '1',
    email: '',
    first_name: '',
    last_name: '',
    levels_of_study: '',
    major: '',
    date_of_birth: new Date(0),
    gender: '',
    phone_number: '',
    school: '',
    userId: props.session?.user.id || '',
  })

  const submitApplicationForm = api.userInformation.useMutation()
  const subscribeToNewsletter = api.subscribeToNewsletter.useMutation()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (subscribe && formData.email) {
        subscribeToNewsletter.mutateAsync({ email: formData.email })
      }
      await submitApplicationForm.mutateAsync(formData)
    }
    catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && formData.email) {
      setSubscribe(!subscribe)
    }
    else {
      e.target.checked = false
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
      if (e.target.name === 'email' && subscribe) {
        handleSubscribe(e)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="first_name"
        value={formData.first_name || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="last_name"
        value={formData.last_name || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email || ''}
        onChange={handleOnChange}
      />

      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        value={subscribe ? 'true' : 'false'}
        checked={subscribe}
        onChange={handleSubscribe}
      />
      subscribe to newsletter with email

      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        value={formData.school || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="major">Major</label>
      <input
        type="text"
        id="major"
        name="major"
        value={formData.major || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="yearOfStudy">Year of Study</label>
      <input
        type="text"
        id="yearOfStudy"
        name="levels_of_study"
        value={formData.levels_of_study || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={formData.gender || ''}
        onChange={handleOnChange}
      />

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        type="date"
        id="dateOfBirth"
        name="date_of_birth"
        value={formData.date_of_birth ? formData.date_of_birth.toISOString().split('T')[0] : ''}
        onChange={handleOnChange}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phone_number"
        value={formData.phone_number || ''}
        onChange={handleOnChange}
      />

      <button type="submit">Submit</button>
    </form>
  )
};

export default ApplicationForm
