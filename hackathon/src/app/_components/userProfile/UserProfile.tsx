"use client";

import { Session } from "next-auth";
import { api } from "~/trpc/react";

interface UserProfileProps {
  session: Session;
}

export function UserProfile(props: UserProfileProps) {
  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(props.session, null, 2)}
    </div>
  );
}
