import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export function useRegistrationSchema() {
  const registrationSchema = z.object({

    challengeInterest: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Required' }),

    discoverySource: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Required' }),

    desiredWorkshops: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .min(1, { message: 'Required' }),

    qnxExperienceLevel: z
      .string(),

    adviceForFirstTimers: z
      .string()
      .min(50, { message: 'Please provide at least 50 characters' })
      .max(500, { message: 'Keep it under 500 characters' }),
  })

  const registration = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
    },
    mode: 'onBlur',
  })

  return {
    registration,
    registrationSchema,
    isDirty: registration.formState.isDirty,
    isValid: registration.formState.isValid,
  }
}
