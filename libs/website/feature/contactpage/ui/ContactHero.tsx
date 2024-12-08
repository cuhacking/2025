import { TerminalText } from '@cuhacking/shared/ui/src/cuHacking/components/terminal-text'
import React from 'react'

export function ContactHero(): React.JSX.Element {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-3 pl-3 sm:pl-8">
        Contact Us
      </h1>
      <p className="text-lg pl-5 sm:pl-10">
        <TerminalText>
          Feel free to ask us anything! We’re here to help.
        </TerminalText>
      </p>
    </div>
  )
}
