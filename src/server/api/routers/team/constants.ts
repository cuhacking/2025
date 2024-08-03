import { z } from 'zod'

export const joinUserTeamSchema = z.object({
  userId: z.string().min(1),
  teamId: z.string().min(1),
})

export const leaveUserTeamSchema = z.object({
  userId: z.string().min(1),
})
