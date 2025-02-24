import type { ReactNode } from 'react'

import { Section, Tailwind } from '@react-email/components'

export function Card({ title, children }: { title: string, children: ReactNode }) {
  return (
    <Tailwind>
      <Section className="rounded-lg shadow-lg text-center border border-solid border-border
          bg-card backdrop-blur-md px-6 pt-5 pb-4"
      >
        {title && (
          <h2 className="text-[#89ED10] text-xl font-mono m-0">
            {title}
          </h2>
        )}
        {children}
      </Section>
    </Tailwind>
  )
}
