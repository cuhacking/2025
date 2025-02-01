import type { UserDetails } from '@cuhacking/portal/types/user';
import { tShirtSizes } from '@cuhacking/portal/types/tShirt';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export function useProfileSchema(
  user: Partial<UserDetails>,
  isStudent: boolean,
) {
  const profileSchema = z.object({
    firstName: z
      .string()
      .max(100)
      .refine((value: string) => value !== null && value !== undefined, {
        message: 'Required',
      })
      .refine((value) => /^[a-z ]+$/i.test(value), {
        message: 'First name should contain only alphabets',
      }),
    lastName: z
      .string()
      .max(100)
      .refine((value: string) => value !== null && value !== undefined, {
        message: 'Required',
      })
      .refine((value) => /^[a-z ]+$/i.test(value), {
        message: 'Last name should contain only alphabets',
      }),
    preferredDisplayName: z
      .string()
      .max(100)
      .refine((value: string) => value !== null && value !== undefined, {
        message: 'Required',
      })
      .refine((value) => /^[a-z]+$/i.test(value), {
        message: 'Display name should contain only alphabets',
      }),
    email: z.string().email(),
    tShirtSize: z.nativeEnum(tShirtSizes),
    age: z.number().int(),
    yearStanding: z
      .number()
      .int()
      .optional()
      .refine(
        (value: string) => !isStudent || (isStudent && value !== undefined),
        { message: 'Required' },
      )
      .refine((value: number) => !value || value <= 7, {
        message: 'Invalid year standing',
      }),
    expectedGraduationDate: z
      .date()
      .optional()
      .refine((value: string) => !isStudent || (isStudent && value), {
        message: 'Required',
      }),
    degree: z
      .string()
      .optional()
      .refine((value: string) => !isStudent || (isStudent && value), {
        message: 'Required',
      }),
    institution: z
      .string()
      .optional()
      .refine((value: string) => !isStudent || (isStudent && value), {
        message: 'Required',
      }),
    fieldOfStudy: z
      .string()
      .optional()
      .refine((value: string) => !isStudent || (isStudent && value), {
        message: 'Required',
      }),
    phoneNumber: z
      .string()
      .refine((value: string) => /^\+?[1-9]\d{10}$/.test(value), {
        message: 'Invalid phone number format',
      }),
    emergencyContactFirstName: z
      .string()
      .refine((value: string) => /^[a-z ]+$/i.test(value), {
        message: 'Emergency contact first name should contain only alphabets',
      }),
    emergencyContactLastName: z
      .string()
      .refine((value: string) => /^[a-z ]+$/i.test(value), {
        message: 'Emergency contact last name should contain only alphabets',
      }),
    emergencyContactPhoneNumber: z
      .string()
      .refine((value: string) => /^\+?[1-9]\d{1,14}$/.test(value), {
        message: 'Invalid emergency contact phone number',
      }),
    emergencyContactRelationship: z
      .string()
      .refine((value: string) => value !== '', { message: 'Required' }),
    middleName: z.string().max(100).optional(),
    gender: z.string(),
    ethnicBackground: z.string().optional(),
    dietaryRestrictions: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    allergies: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    website: z.string().optional(),
    isPublicProfile: z.boolean().optional(),
    isPublicResume: z.boolean().optional(),
  });

  const profile = useForm<UserDetails>({
    resolver: zodResolver(profileSchema),
    defaultValues: user,
    mode: 'onBlur',
  });
  return {
    profile,
    profileSchema,
    isDirty: profile.formState.isDirty,
    isValid: profile.formState.isValid,
  };
}
