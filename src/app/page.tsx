import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import UserProfile from "~/app/_components/userProfile/UserProfile";

export default async function Home() {
  const SESSION = await getServerAuthSession();

  if (!SESSION) {
    return (
      <div>
        <p>
          <Link href="/api/auth/signin">Sign in</Link>
        </p>
      </div>
    );
  }

  const TEAM = await api.team.getByUserId({userId: SESSION.user.id})

  return (
    <HydrateClient>
      <div>
        <p>
          Welcome back, <code>{SESSION.user.email}</code>!
        </p>
        {TEAM ? (
          <UserProfile SESSION={SESSION} TEAM={TEAM}/>
        ) : (
          <h1>Error: No team found for user</h1>
        )}
      </div>
    </HydrateClient>
  );
}
