import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Separator } from '@cuhacking/shared/ui/separator'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import React from 'react'

interface MissionProps {
  logo: string
}

// TODO: Refactor so that it takes in props for text
export function Mission({ logo }: MissionProps) {
  return (

    <GlassmorphicCard className="py-10 px-3.5 sm:px-12 sm:py-16">
      <section className="flex flex-col items-center h-full gap-10 lg:flex-row">
        <div>
          <img src={logo} alt="cuHacking Logo" />
        </div>
        <Separator orientation="vertical" className="self-stretch hidden h-auto lg:block" />
        <div className="flex flex-col gap-y-1">
          <h2 className="text-3xl">OUR MISSION</h2>
          <div>
            <TerminalText className="text-base">
              <p>
                cuHacking is a 36-hour hackathon that
                <span className="text-primary"> ✨sparks creativity</span>
                {' '}
                and problem-solving among 🍁Ottawa's brightest minds.
              </p>

            </TerminalText>
            <TerminalText className="text-base">
              <p>
                {' '}
                A catalyst for
                <span className="text-orange-400"> innovation</span>
                ,
                <span className="text-blue-400"> collaboration</span>
                , and
                <span className="text-lime-400"> learning</span>
                , providing an inclusive space for passionate minds to create and grow together.

              </p>

            </TerminalText>
          </div>
        </div>
      </section>
    </GlassmorphicCard>

  )
}
