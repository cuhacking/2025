import { createRouter, publicProcedure } from '../../trpc'

export const userRouter = createRouter({
  hello: publicProcedure.query(({ ctx }: { ctx: any }) => {
    return {
      message: `Hello, ${ctx?.user?.name ?? 'world'} from tRPC!`,
    }
  }),
})
