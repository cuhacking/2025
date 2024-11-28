import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { Link } from '@remix-run/react'
import React from 'react'
import { FAQItem } from '../faq-item/faq-item'

interface FAQPresenterProps {
  questions: { question: string, answers: string[] }[]
}
// TODO: REMOVE HARDCODED EXTRA FAQ ITEMS
export function FAQPresenter({ questions }: FAQPresenterProps) {
  return (
    <GlassmorphicCard className="flex flex-col w-full gap-6 px-5 py-6">
      <h2 className="text-4xl font-bold">FAQ</h2>
      <Accordion
        type="multiple"
        className="flex flex-col flex-grow-0 w-full gap-2"
      >
        {questions.map(({ question, answers }) => (
          <FAQItem key={question} question={question} answers={answers} />
        ))}
        {/* EXTRA FAQ ITEM IS NECESSARY RIGHT NOW SO THAT WE CAN HAVE A QUESTION AND ANSWER WITH LINKS  */}
        <AccordionItem value="I have more questions, where should I go?">
          <AccordionTrigger>
            <p>
              <span className="text-primary">faq(</span>
              I have more questions,
              where should I go?
              <span className="text-primary">)</span>
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <TerminalText>
              <p>
                Hit us up on
                {' '}
                <Link
                  to="https://discord.gg/fh2KseMysN"
                  target="_blank"
                  className="underline hover:text-blue-400 hover:underline decoration-blue-400 duration-300"
                >
                  Discord
                </Link>
                ,
                {' '}
                <Link
                  to="https://www.instagram.com/cuhacking/"
                  target="_blank"
                  className="underline hover:text-lime-400 hover:underline decoration-lime-400 duration-300"
                >
                  Instagram
                </Link>
                , or
                {' '}
                <Link
                  to="mailto:info@cuhacking.ca"
                  target="_blank"
                  className="underline hover:text-yellow-400 hover:underline decoration-yellow-400 duraiton-300"
                >
                  Email
                </Link>
                {' '}
                us
              </p>
            </TerminalText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </GlassmorphicCard>
  )
}
