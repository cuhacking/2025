import type { LegalPageProps } from '@cuhacking/portal/types/legal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { Checkbox } from '@cuhacking/shared/ui/checkbox'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { ScrollArea } from '@shadcn/components/ui/scroll-area'
import { useState } from 'react'

export function Legal({ legalData }: LegalPageProps) {
  const [readItems, setReadItems] = useState<Record<string, boolean>>({})
  const [scrollEndReached, setScrollEndReached] = useState<Record<string, boolean>>({})

  const handleScroll = (value: string, e: React.UIEvent<HTMLElement>) => {
    const scrollHeight = e.currentTarget.scrollHeight
    const scrollTop = e.currentTarget.scrollTop
    const clientHeight = e.currentTarget.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setScrollEndReached(prev => ({
        ...prev,
        [value]: true,
      }))
    }
  }

  const handleCheckboxChange = (value: string) => {
    setReadItems(prev => ({
      ...prev,
      [value]: !prev[value],
    }))
  }

  const allChecked = legalData.every(({ value }) => readItems[value])
  const allScrolled = legalData.every(({ value }) => scrollEndReached[value])

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col">
      <div className="flex flex-col mb-4">
        <h3 className="text-lg font-bold">Legalities</h3>
        <p className="text-sm text-gray-400">
          <Typography variant="paragraph-base">YO! Before we get into it, read these please.</Typography>
        </p>
        <p className="text-sm text-gray-400">
          <Typography variant="paragraph-base">!! MUST READ ALL !!</Typography>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full h-auto">
        {legalData.map(({ value, title, content, buttonContent }) => (
          <AccordionItem key={value} value={value} className="border-b border-white">
            <AccordionTrigger className="text-center text-primary">{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-2">
              <ScrollArea className="max-h-60 w-auto rounded-md border p-2 overflow-y-auto" onScroll={e => handleScroll(value, e)}>
                {content}
              </ScrollArea>
              <div className="flex gap-x-3">
                <Checkbox
                  className={cn(
                    'w-4 h-4',
                    { 'cursor-not-allowed opacity-50': !scrollEndReached[value] },
                  )}
                  disabled={!scrollEndReached[value]}
                  onCheckedChange={() => handleCheckboxChange(value)}

                />

                <Typography variant="paragraph-base">
                  {buttonContent}
                </Typography>
              </div>

            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        onClick={() => {}}
        disabled={!allChecked || !allScrolled}
        className={cn(
          'mt-4 p-3 rounded-lg text-white',
          {
            'bg-primary opacity-50 cursor-not-allowed': !allChecked || !allScrolled,
            'bg-primary': allChecked && allScrolled,
          },
        )}
      >
        <Typography variant="h6">LETS CREATE YOUR PROFILE</Typography>
      </Button>
    </div>
  )
}
