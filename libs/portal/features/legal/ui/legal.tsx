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
    const target = e.currentTarget
    const scrollHeight = target.scrollHeight
    const scrollTop = target.scrollTop
    const clientHeight = target.clientHeight

    if (scrollTop + clientHeight >= scrollHeight - 2) {
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
    <div className="max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col py-4">
      <div className="flex flex-col py-4 gap-y-1.5 ">
        {/* <h3 className="text-base sm:text-lg font-bold mb-3">Legalities</h3> */}
        <Typography variant="h4" className="">Legalities</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">YO! Before we get into it, read these please.</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">!! MUST READ ALL !!</Typography>
      </div>

      <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
        {legalData.map(({ value, title, content, buttonContent }) => (
          <AccordionItem key={value} value={value} className="border-b border-white w-full">
            <AccordionTrigger className="pt-3 pb-1.5 flex justify-between items-center w-full hover:no-underline">
              <Typography variant="h4" className="text-primary">{title}</Typography>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4">
              <ScrollArea
                className="max-h-40 sm:max-h-60 rounded-md border p-4 overflow-y-auto bg-neutral-900"
                onScroll={e => handleScroll(value, e)}
              >
                {content}
              </ScrollArea>
              <div className="flex flex-row gap-3">
                <Checkbox
                  className={cn(
                    'w-4 h-4',
                    { 'cursor-not-allowed opacity-50': !scrollEndReached[value] },
                  )}
                  disabled={!scrollEndReached[value]}
                  onCheckedChange={() => handleCheckboxChange(value)}
                />
                <Typography variant="paragraph-base" className="text-left">
                  {buttonContent}
                  {' '}
                  <span className="text-red-500">*</span>
                </Typography>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="px-4 flex justify-center pb-6">
        <Button
          onClick={() => { }}
          disabled={!allChecked || !allScrolled}
          className={cn(
            'mt-4 p-3 rounded-lg text-black w-full sm:max-w-xs h-[36px] flex items-center',
            {
              'bg-primary opacity-50 cursor-not-allowed': !allChecked || !allScrolled,
              'bg-primary': allChecked && allScrolled,
            },
          )}
        >
          <Typography variant="h6">LETS CREATE YOUR PROFILE</Typography>
        </Button>
      </div>
    </div>
  )
}
