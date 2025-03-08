import arrow_icon from '@cuhacking/shared/assets/icons/general/arrow-1.svg'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'

interface UserStatusProps {
  className?: string
  name: string
}

export function UserStatus({ name, className }: UserStatusProps) {
  const messageContent = `Hi! Thank you for applying ${name} 💚`
  const additionalContent = (
    <>
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
    </>
  )

  return (
    <GlassmorphicCard className={cn('flex flex-col gap-2 items-start p-3', className)}>
      <Typography variant="paragraph-base">
        {messageContent}
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
