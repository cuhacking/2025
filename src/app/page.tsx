import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { UserProfile } from "./_components/userProfile/UserProfile";
import ApplicationForm from "./_components/ApplicationForm";

export default async function Home() {
  const session = await getServerAuthSession();

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

  return (
    <HydrateClient>
      <div>
        <p>
          Welcome back, <code>{session.user.email}</code>!
        </p>
        <UserProfile session={session} />
        <ApplicationForm session={session} />
      </div>
    </HydrateClient>
  );
}
