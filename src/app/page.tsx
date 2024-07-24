import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

// Components
import { UserProfile } from "./_components/userProfile/UserProfile";
import SignInButton from "./_components/NextAuth/SignInButton";
import SignOutButton from "./_components/NextAuth/SignOutButton";

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
        <SignInButton/>
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
        <SignOutButton/>
      </div>
    </HydrateClient>
  );
}
