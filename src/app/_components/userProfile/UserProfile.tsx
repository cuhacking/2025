import QRCode from 'react-qr-code'
import { TRPCError } from '@trpc/server'
import SignOut from '~/app/_components/userProfile/signOut'
import { api } from '~/trpc/server'
import { getServerAuthSession } from '~/server/auth'

export default async function UserProfile() {
  const session = await getServerAuthSession()

  if (!session) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: `Session not found`,
    })
  }

  const team = await api.team.getByUserId({ userId: session.user.id })

  if (!team) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: `Team not found`,
    })
  }

  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(session, null, 2)}

      <h1>Your team</h1>
      <p>
        Team name:
        {team.name}
      </p>
      <p>
        Invite code:
        {team.id}
      </p>

      <p>Share this QR code with your friends to invite them!</p>
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '15%', width: '15%', margin: '2rem' }}
        value={`http://localhost:8000/t/j/${team.id}`}
        viewBox="0 0 256 256"
      />

      <SignOut />
    </div>
  )
}
