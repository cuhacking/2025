import { Accordion } from '@cuhacking/ui/components/accordion/accordion'
import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import FAQItem from './faq-item'

interface FAQContainerProps {
  questions: { question: string, answer: string }[]
}
function FAQContainer({ questions }: FAQContainerProps) {
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

export default FAQContainer
