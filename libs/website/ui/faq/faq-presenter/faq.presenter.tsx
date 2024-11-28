import { Accordion } from '@cuhacking/shared/ui/accordion'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import React from 'react'
import { FAQItem } from '../faq-item/faq-item'

interface FAQPresenterProps {
  questions: { question: string, answer: string }[]
}

export function FAQPresenter({ questions }: FAQPresenterProps) {
  return (
    <GlassmorphicCard className="flex flex-col w-full gap-6 px-5 py-6">
      <h2 className="text-4xl font-bold">FAQ</h2>
      <Accordion type="multiple" className="flex flex-col flex-grow-0 w-full gap-2">
        {questions.map(({ question, answer }) => (
          <FAQItem key={question} question={question} answer={answer} />
        ))}
      </Accordion>
    </GlassmorphicCard>
  )
}
