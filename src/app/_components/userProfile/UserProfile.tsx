import QRCode from 'react-qr-code'
import type { Session } from 'next-auth'
import type { Team } from '@prisma/client'
import SignOut from '~/app/_components/userProfile/signOut'

export default function UserProfile({
  SESSION,
  TEAM,
}: {
  SESSION: Session
  TEAM: Team
}) {
  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(SESSION, null, 2)}

      <h1>Your team</h1>
      <p>
        Team name:
        {TEAM.name}
      </p>
      <p>
        Invite code:
        {TEAM.id}
      </p>

      <p>Share this QR code with your friends to invite them!</p>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '15%', width: '15%', margin: '2rem' }}
        value={`http://localhost:8000/t/j/${TEAM.id}`}
        viewBox="0 0 256 256"
      />

      <SignOut />
    </div>
  )
}
