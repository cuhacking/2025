import type { z } from 'zod'
import type { joinUserTeamSchema, leaveUserTeamSchema } from '~/server/api/routers/team/constants'

export type JoinUserTeamInput = z.infer<typeof joinUserTeamSchema>
export type LeaveUserTeamInput = z.infer<typeof leaveUserTeamSchema>
