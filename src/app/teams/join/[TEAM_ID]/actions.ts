'use server';

import {api} from "~/trpc/server";
import {redirect} from "next/navigation";

export const joinTeamAction = async (
  teamId: string,
  userId: string,
): Promise<never> => {

  await api.team.joinUserTeam({
    userId,
    teamId,
  });

  redirect("/");
};