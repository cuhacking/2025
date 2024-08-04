import { z } from 'zod'

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc'

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise(resolve => setTimeout(resolve, 1000))

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      })
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    })
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),

  submitApplicationForm: publicProcedure
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
    })
    )
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.db.userInformation.create({
        data:{
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
          userId: input.userId
        },
      });
      return data;
    }),
})
