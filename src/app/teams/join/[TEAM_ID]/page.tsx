import {getServerAuthSession} from "~/server/auth";
import {api} from "~/trpc/server";
import JoinTeam from "~/app/_components/team/joinTeam";

export default async function Home({
  params
}: {
  params: {
    TEAM_ID: string
  }
}) {
  const { TEAM_ID } = params;
  console.log("TEAM_ID:", TEAM_ID)
  const SESSION = await getServerAuthSession();

  if (!SESSION) {
    return <p>Sign in or Register to join teams</p>
  }

  if (!TEAM_ID) {
    return <p>Invalid team ID</p>;
  }

  const TEAM = await api.team.getByTeamId({
    teamId: TEAM_ID
  })

  if (!TEAM) {
    return <p>Invalid team</p>;
  }

  return (
    <div>
      <h1>You&apos;ve been invited to join {TEAM.name}</h1>
      <p>Team ID: {TEAM.id}</p>
      <JoinTeam TEAM_ID={TEAM_ID} USER_ID={SESSION.user.id}/>
    </div>
  );
};