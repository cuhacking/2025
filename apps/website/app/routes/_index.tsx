import type { MetaFunction } from '@netlify/remix-runtime'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shadcn/components/ui/accordion'
import { Calendar } from '@shadcn/components/ui/calendar'

import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: 'cuHacking 2025' },
    { name: 'description', content: 'Carleton University\'s Official Hackathon.' },
  ]
}
export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto flex justify-center">
      <div className="max-w-lg">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
