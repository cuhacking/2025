import arrow_icon from '@cuhacking/shared/assets/icons/general/arrow-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'

type Status = 'pending' | 'accepted' | 'rejected'

interface UserStatusProps {
  className?: string
  name: string
  status?: Status
}

export function UserStatus({ name, status = 'pending', className }: UserStatusProps) {
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
            type="button"
            variant="secondary"
          >
            RSVP
          </Button>
        </>
      )
      break
    case 'pending':
      messageContent = 'Hi! Thank you for applying'
      additionalContent = (
        <div>
          <TerminalText>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              ... coming soon
            </a>
          </TerminalText>

          <TerminalText>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              We hope to cuHacking 👀!!!
            </a>
          </TerminalText>
        </div>
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
    <GlassmorphicCard className={cn('flex flex-col gap-2 items-start p-3', className)}>
      <Typography variant="paragraph-base">
        {messageContent}
        {' '}
        {name}
        {' '}
        💚
      </Typography>
      <TerminalText
        className="text-lg text-center"
        icon={{
          alt: 'Arrow',
          src: arrow_icon,
        }}
      >
        <p className="text-primary text-center">
          cuHacking.info()
        </p>
      </TerminalText>
      {additionalContent}
    </GlassmorphicCard>
  )
}
