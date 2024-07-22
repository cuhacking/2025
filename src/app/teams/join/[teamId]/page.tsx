import {getServerAuthSession} from "~/server/auth";
import {api} from "~/trpc/server";
import JoinTeam from "~/app/_components/team/joinTeam";

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
      <JoinTeam teamId={teamId} userId={session.user.id}/>
    </div>
  );
};