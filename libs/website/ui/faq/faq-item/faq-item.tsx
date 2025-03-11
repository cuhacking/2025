import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cuhacking/shared/ui/accordion'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'

interface FAQItemProps {
  question: string
  answers: string[]
}

export function FAQItem({ question, answers }: FAQItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger isLeft>
        <p>
          <span className="text-primary">faq(</span>
          {question}
          <span className="text-primary">)</span>
        </p>
      </AccordionTrigger>
      <AccordionContent>
        {answers.map((answer: string) => (
          <TerminalText key={answer} className="pl-2">
            <p>{answer}</p>
          </TerminalText>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
