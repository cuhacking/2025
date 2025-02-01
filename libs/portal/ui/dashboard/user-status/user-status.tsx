import arrow_icon from '@cuhacking/shared/assets/icons/general/arrow-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text/terminal-text'

type Status = 'pending' | 'accepted' | 'rejected'

interface UserStatusProps {
  name: string
  status?: Status
}

export function UserStatus({ name, status }: UserStatusProps) {
  let additionalContent
  let messageContent

  switch (status) {
    case 'accepted':
      messageContent = 'WELCOME TO CUHACKING 2025! 💚'
      additionalContent = (
        <>

          <TerminalText className="text-orange-400">!!!ACCEPTED!!!</TerminalText>
          <TerminalText>WE HOPE TO CUHACKING!</TerminalText>
          <Button
            className="w-full text-black"
            onClick={() => {}}
            variant="secondary"
          >
            RSVP
          </Button>
        </>
      )
      break
    case 'pending':
      messageContent = 'HI! THANK YOU FOR APPLYING 💚'
      additionalContent = (

        <TerminalText>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            Under review 👀
          </a>
        </TerminalText>

      )
      break
    case 'rejected':
      additionalContent = (
        <>
          <TerminalText>Unfortunately, we couldn't accept your application this time.</TerminalText>
          <TerminalText>Don't be discouraged! We encourage you to apply again next year. 💪</TerminalText>
        </>
      )
      break
  }

  return (
    <GlassmorphicCard className="w-full flex flex-col items-start gap-3 p-3">
      <p>{messageContent}</p>

      <TerminalText
        className="text-lg text-center"
        icon={{
          alt: 'Arrow',
          src: arrow_icon,
        }}
      >
        <p className="text-primary text-center">
          status(
          <span className="text-white">{name}</span>
          )
        </p>
      </TerminalText>
      {additionalContent}
    </GlassmorphicCard>
  )
}
