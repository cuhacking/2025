import { TRPCError } from '@trpc/server'
import { SignOut } from '~/app/_components/userProfile/signOut'
import { api } from '~/trpc/server'
import { getServerAuthSession } from '~/server/auth'
import { TeamQRCode } from '~/app/_components/userProfile/teamQrCode'

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
      <TeamQRCode teamId={team.id} />

      <SignOut />
    </div>
  )
}
