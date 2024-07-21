import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import { UserProfile } from "./_components/userProfile/UserProfile";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <div>
        <p>
          <Link href="/api/auth/signin">Sign in</Link>
        </p>
      </div>
    );
  }

  const team = await api.team.getByUserId({userId: session.user.id})

  if (!team) return <h1>Error: No team found for user</h1>

  return (
    <HydrateClient>
      <div>
        <p>
          Welcome back, <code>{session.user.email}</code>!
        </p>
        <UserProfile session={session} team={team} />
      </div>
    </HydrateClient>
  );
}
