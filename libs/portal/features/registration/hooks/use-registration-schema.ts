import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export function useRegistrationSchema() {
  const registrationSchema = z.object({

    challengeInterest: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Select at least one challenge' }),

    discoverySource: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Select at least one source' }),

    desiredWorkshops: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Select at least one workshop' }),

    qnxExperienceLevel: z
      .string()
      .min(1, { message: 'Select your QNX experience level' }),

    adviceForFirstTimers: z
      .string()
      .min(10, { message: 'Please provide at least 10 characters' })
      .max(500, { message: 'Keep it under 500 characters' }),
  })

  const registration = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      challengeInterest: [],
      discoverySource: [],
      desiredWorkshops: [],
      qnxExperienceLevel: '',
      adviceForFirstTimers: '',
    },
    mode: 'onChange',
  })

  return {
    registration,
    registrationSchema,
    isDirty: registration.formState.isDirty,
    isValid: registration.formState.isValid,
  }
}
