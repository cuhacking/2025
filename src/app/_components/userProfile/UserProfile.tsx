"use client";

import QRCode from "react-qr-code"
import { Session } from "next-auth";
import { Team } from "@prisma/client";

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

      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "15%", width: "15%", margin: "2rem"}}
        value={props.team.id}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
