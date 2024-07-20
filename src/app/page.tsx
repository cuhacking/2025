import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { UserProfile } from "./_components/userProfile/UserProfile";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  if (!session) {
    return (
      <div>
        <p>
          Welcome to <code>trpc</code> with <code>next-auth</code>!
        </p>
        <p>
          <Link href="/api/auth/signin">Sign in</Link> to see the latest post.
        </p>
      </div>
    );
  }

  const team = await api.team.getByUserId({userId: session.user.id})

  if (!team) return <h1>Error: no team found for user</h1>

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
