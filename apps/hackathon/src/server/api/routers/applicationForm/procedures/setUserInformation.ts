import { z } from 'zod'

import {
  protectedProcedure,
} from '~/server/api/trpc'

export const userInformationRouter = protectedProcedure
  .input(
    z.object({
      id: z.string(),
      email: z.string().email().nullable(),
      first_name: z.string().nullable(),
      last_name: z.string().nullable(),
      levels_of_study: z.string().nullable(),
      major: z.string().nullable(),
      date_of_birth: z.date().nullable(),
      gender: z.string().nullable(),
      phone_number: z.string().nullable(),
      school: z.string().nullable(),
      userId: z.string(),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const data = await ctx.db.userInformation.create({
      data: {
        id: input.id,
        email: input.email,
        first_name: input.first_name,
        last_name: input.last_name,
        levels_of_study: input.levels_of_study,
        major: input.major,
        date_of_birth: input.date_of_birth,
        gender: input.gender,
        phone_number: input.phone_number,
        school: input.school,
        userId: input.userId,
      },
    })
    return data
  })
