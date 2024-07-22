import {type joinUserTeamSchema, type leaveUserTeamSchema} from "~/server/api/routers/team/constants";
import {type z} from "zod";

export type JoinUserTeamInput = z.infer<typeof joinUserTeamSchema>;
export type LeaveUserTeamInput = z.infer<typeof leaveUserTeamSchema>;