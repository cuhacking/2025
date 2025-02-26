import type { LegalPageProps } from '@cuhacking/portal/types/terms'
import externalArrow from '@cuhacking/shared/assets/icons/general/external-link-black-1.svg'
// import dashboard_left from '@cuhacking/portal/assets/backgrounds/dashboard-bg-left.webp'
// import dashboard_right from '@cuhacking/portal/assets/backgrounds/dashboard-bg-right.webp'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { Checkbox } from '@cuhacking/shared/ui/checkbox'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { Form, Link } from '@remix-run/react'
import { ScrollArea } from '@shadcn/components/ui/scroll-area'
import Markdown from 'markdown-to-jsx'
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

  const allChecked = legalData.every(({ value, buttonContent2 }) => {
    return readItems[`${value}1`] && (buttonContent2 ? readItems[`${value}2`] : true)
  })

  const allScrolled = legalData.every(({ value }) => scrollEndReached[value])

  return (
    <div className="max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col py-4">

      <div className="flex flex-col py-4 gap-y-1.5 ">

        <Typography variant="h4" className="">Legalities</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">YO! Before we get into it, read these please.</Typography>
        <Typography variant="paragraph-xs" className="text-gray-400">!! MUST READ ALL !!</Typography>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col col-span-full gap-4 w-full
      "
      >
        {legalData.map(({ value, title, content, href, buttonContent, buttonContent2 }) => (
          <AccordionItem key={value} value={value} className="w-full ">
            <AccordionTrigger className="pt-3 pb-1.5 border-b border-white flex justify-between items-center w-full hover:no-underline">
              <Typography variant="h4" className="text-primary transition-all transform hover:scale-110">{title}</Typography>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 py-4">
              <div className="relative">
                <ScrollArea
                  onScroll={e => handleScroll(value, e)}
                  className="max-h-60 p-4 overflow-y-auto bg-card border backdrop-blur-md rounded-lg shadow-dropShadow border-border"
                >
                  <div className="prose
      lg:prose-xl
      [--tw-prose-body:theme(colors.foreground)]
      [--tw-prose-headings:theme(colors.foreground)]
      [--tw-prose-links:theme(colors.foreground)]
      [--tw-prose-bold:theme(colors.foreground)]
      [--tw-prose-counters:theme(colors.foreground)]
      [--tw-prose-bullets:theme(colors.foreground)]
      [--tw-prose-hr:theme(colors.foreground)]
      [--tw-prose-quotes:theme(colors.foreground)]
      [--tw-prose-quote-borders:theme(colors.foreground)]
      [--tw-prose-code:theme(colors.foreground)]
      [--tw-prose-pre-code:theme(colors.foreground)]
      [--tw-prose-pre-bg:theme(colors.gray.800)]
      [--tw-prose-th-borders:theme(colors.foreground)]
      [--tw-prose-td-borders:theme(colors.foreground)]"
                  >
                    <Markdown>{content}</Markdown>
                  </div>
                </ScrollArea>
                <Link
                  to={href}
                  target="_blank"
                  className="absolute bottom-2 right-4 text-background flex items-center gap-2 bg-primary p-2 rounded-md w-fit z-10"
                >
                  <img className="size-5" src={externalArrow} alt="link arrow" />
                  <Typography variant="paragraph-sm" className="hidden sm:block">
                    <p>Open link</p>
                  </Typography>
                </Link>
              </div>
              <div className={cn(
                'flex flex-row gap-3',
                { 'cursor-not-allowed opacity-35': !scrollEndReached[value] },
              )}
              >
                <Checkbox
                  className="size-6 border-white/50 bg-transparent"
                  disabled={!scrollEndReached[value]}
                  checked={readItems[`${value}1`]}
                  onCheckedChange={() => handleCheckboxChange(`${value}1`)}
                />
                <Typography variant="paragraph-base" className="text-left">
                  {buttonContent}
                  {' '}
                  <span className="text-red-500">*</span>
                </Typography>
              </div>
              {buttonContent2 && (
                <div className={cn(
                  'flex flex-row gap-3',
                  { 'cursor-not-allowed opacity-35': !scrollEndReached[value] },
                )}
                >
                  <Checkbox
                    className="size-6 border-white/50 bg-transparent"
                    disabled={!scrollEndReached[value]}
                    checked={readItems[`${value}2`]}
                    onCheckedChange={() => handleCheckboxChange(`${value}2`)}
                  />
                  <Typography variant="paragraph-base" className="text-left">
                    {buttonContent2}
                    {' '}
                    <span className="text-red-500">*</span>
                  </Typography>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="px-4 flex justify-center pb-6">
        <Form method="post">
          <Button
            onClick={() => { }}
            disabled={!allChecked || !allScrolled}
            variant="secondary"
            aria-label="Redirect to Profile"
            type="submit"
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
        </Form>

      </div>
    </div>
  )
}
