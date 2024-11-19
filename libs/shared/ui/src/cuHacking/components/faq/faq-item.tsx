import { AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/ui/components/accordion/accordion'
import TerminalText from '@cuhacking/ui/components/terminal-text/terminal-text'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
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

export default FAQItem
