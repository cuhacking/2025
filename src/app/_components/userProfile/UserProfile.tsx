"use client";

import QRCode from "react-qr-code"
import { type Session } from "next-auth";
import { type Team } from "@prisma/client";
import { signOut } from "next-auth/react"

interface UserProfileProps {
  session: Session;
  team: Team;
}

export function UserProfile(props: UserProfileProps) {
  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(props.session, null, 2)}

      <h1>Your team</h1>
      <p>Team name: {props.team.name}</p>
      <p>Invite code: {props.team.id}</p>

      <p>Share this QR code with your friends to invite them!</p>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "15%", width: "15%", margin: "2rem"}}
        value={`http://localhost:8000/t/j/${props.team.id}`}
        viewBox={`0 0 256 256`}
      />

      <button onClick={() => signOut()}>Sign out</button>

    </div>
  );
}
