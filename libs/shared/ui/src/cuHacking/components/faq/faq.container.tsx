import { Accordion } from '@cuhacking/ui/components/accordion/accordion'
import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import FAQItem from './faq-item'

interface FAQContainerProps {
  questions: { question: string, answer: string }[]
}
function FAQContainer({ questions }: FAQContainerProps) {
  return (
    <GlassmorphicCard className="flex flex-col w-full px-5 py-6 gap-y-6">
      <h2 className="text-4xl font-bold">FAQ</h2>
      <Accordion type="multiple" className="flex-grow-0 w-full gap-y-6">
        {questions.map(({ question, answer }) => (
          <FAQItem key={question} question={question} answer={answer} />
        ))}
      </Accordion>
    </GlassmorphicCard>
  )
}

export default FAQContainer
