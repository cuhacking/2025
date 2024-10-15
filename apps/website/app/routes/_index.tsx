import NxWelcome from '../nx-welcome'
import { api } from '../../lib/trpc/server'

const hello = await api.user.hello()

export default function Index() {
  return (
    <div>
      <NxWelcome title={hello.message} />
    </div>
  )
}
