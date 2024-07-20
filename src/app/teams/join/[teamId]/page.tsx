import {getServerAuthSession} from "~/server/auth";
import JoinButton from "~/app/teams/join/[teamId]/joinButton";
import {redirect} from "next/navigation";
import {api} from "~/trpc/server";

export async function joinTeamAction(teamId: string, userId: string) {
  "use server";

  await api.team.joinUserTeam({
    userId,
    teamId
  })

  redirect('/')
}

export default async function Home({ params }: { params: { teamId: string } }) {
  const { teamId } = params;
  const session = await getServerAuthSession();

  if (!session) {
    return <p>Sign in or Register to join teams</p>
  }

  if (!teamId) {
    return <p>Invalid team ID</p>;
  }

  const team = await api.team.getByTeamId({
    teamId: teamId
  })

  if (!team) {
    return <div>Invalid team</div>;
  }

  return (
    <div>
      <h1>You&apos;ve been invited to join {team.name}</h1>
      <p>Team ID: {team.id}</p>
      <JoinButton teamId={teamId} userId={session.user.id} joinTeamAction={joinTeamAction}/>
    </div>
  );
};