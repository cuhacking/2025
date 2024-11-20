import { AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/src/cuHacking/components/accordion'
import { TerminalText } from '@cuhacking/shared/ui/src/cuHacking/components/terminal-text'
import React from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger>
        <p>
          <span className="text-primary">faq(</span>
          {question}
          <span className="text-primary">)</span>
        </p>
      </AccordionTrigger>
      <AccordionContent>
        <TerminalText>{answer}</TerminalText>
      </AccordionContent>
    </AccordionItem>
  )
}
