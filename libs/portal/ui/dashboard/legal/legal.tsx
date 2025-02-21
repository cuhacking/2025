import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
// import type { LoaderFunction } from "@remix-run/node";
// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import { ScrollArea } from '@shadcn/components/ui/scroll-area'
import { useState } from 'react'

// interface LegalItem {
//   value: string;
//   title: string;
//   content: string;
//   buttonContent: string;
// }

// interface LoaderData {
//   legalData: LegalItem[];
// }

// export const loader: LoaderFunction = async () => {
//   const legalData: LegalItem[] = [
//     {
//       value: "MLH Code of Conduct",
//       title: "MLH Code of Conduct",
//       content: `Additional cases of harassment include, but are not limited to, sharing sexual images, deliberate intimidation, stalking, following, brigading, doxxing, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it.

// Participants asked to stop any harassing behavior are expected to comply immediately. Sponsors, judges, mentors, volunteers, organizers, MLH staff, and anyone else participating in the event are also subject to the anti-harassment policy. In particular, attendees should not use sexualized images, activities, or other material both in their hacks and during the event. Booth staff (including volunteers) should not use sexualized clothing, uniforms, or costumes, or otherwise create a sexualized environment.

// If a participant engages in harassing behavior, MLH may take any action it deems appropriate, including warning the offender or expulsion from the event with no eligibility for reimbursement or refund of any type. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact MLH using the reporting procedures defined below.

// MLH representatives can help participants contact campus security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.

// We expect participants to follow these rules at all hackathon venues, online interactions in relation to the event, hackathon-related social events, and on hackathon-supplied transportation.`,
//       buttonContent: "I have read MLH Code of Conduct",
//     },
//     {
//       value: "MLH Terms & Conditions",
//       title: "MLH Terms & Conditions",
//       content: "These are the terms and conditions of MLH.",
//       buttonContent: "I have read MLH Terms & Conditions",
//     },
//     {
//       value: "MLH Privacy Policy",
//       title: "MLH Privacy Policy",
//       content: "Here is how MLH handles your privacy and data.",
//       buttonContent: "I have read MLH Privacy Policy",
//     },
//     {
//       value: "cuHacking Terms & Conditions",
//       title: "cuHacking Terms & Conditions",
//       content: "The terms and conditions specific to cuHacking are outlined here.",
//       buttonContent: "I have read cuHacking Terms & Conditions",
//     },
//   ];

//   return json<LoaderData>({ legalData });
// };

export function Legal() {
  // Inline mock data to be used until the loader is ready
  const [readItems, setReadItems] = useState<Record<string, boolean>>({})
  const [scrollEndReached, setScrollEndReached] = useState<Record<string, boolean>>({})

  const _handleReadClick = (value: string) => {
    setReadItems(prev => ({
      ...prev,
      [value]: true,
    }))
  }

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

  const legalData = [
    {
      value: 'MLH Code of Conduct',
      title: 'MLH Code of Conduct',
      content: `Additional cases of harassment include, but are not limited to, sharing sexual images, deliberate intimidation, stalking, following, brigading, doxxing, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it.

Participants asked to stop any harassing behavior are expected to comply immediately. Sponsors, judges, mentors, volunteers, organizers, MLH staff, and anyone else participating in the event are also subject to the anti-harassment policy. In particular, attendees should not use sexualized images, activities, or other material both in their hacks and during the event. Booth staff (including volunteers) should not use sexualized clothing, uniforms, or costumes, or otherwise create a sexualized environment.

If a participant engages in harassing behavior, MLH may take any action it deems appropriate, including warning the offender or expulsion from the event with no eligibility for reimbursement or refund of any type. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact MLH using the reporting procedures defined below.

MLH representatives can help participants contact campus security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.

We expect participants to follow these rules at all hackathon venues, online interactions in relation to the event, hackathon-related social events, and on hackathon-supplied transportation.`,
      buttonContent: 'I have read and agree to the MLH Code of Conduct',
    },
    {
      value: 'MLH Terms & Conditions',
      title: 'MLH Terms & Conditions',
      content: 'These are the terms and conditions of MLH.',
      buttonContent: 'I have read and agree to the MLH Terms & Conditions',
    },
    {
      value: 'MLH Privacy Policy',
      title: 'MLH Privacy Policy',
      content: 'Here is how MLH handles your privacy and data.',
      buttonContent: 'I have read and agree to the MLH Privacy Policy',
    },
    {
      value: 'cuHacking Terms & Conditions',
      title: 'cuHacking Terms & Conditions',
      content: 'The terms and conditions specific to cuHacking are outlined here.',
      buttonContent: 'I have read and agree to the cuHacking Terms & Conditions',
    },
  ]

  const allRead = legalData.every(({ value }) => readItems[value])
  const allScrolled = legalData.every(({ value }) => scrollEndReached[value]) // Check if scrolled to end for all

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="">
        <h3 className="text-lg font-bold">Legalities</h3>
        <p className="text-sm text-gray-400"><Typography variant="paragraph-base">YO! Before we get into it, read these please.</Typography></p>
        <p className="text-sm text-gray-400"><Typography variant="paragraph-base">!! MUST READ ALL !!</Typography></p>
      </div>
      <Accordion collapsible className="w-full h-auto">
        {legalData.map(({ value, title, content, buttonContent }) => (
          <AccordionItem key={value} value={value} className="border-b border-white w-[268px]">
            <AccordionTrigger className="text-center text-primary text-primary ">{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-2">
              <ScrollArea
                className="max-h-60 w-auto rounded-md border p-2 overflow-y-auto"
                onScroll={e => handleScroll(value, e)}
              >
                {content}
              </ScrollArea>
              <Button
                variant="primary"
                className={cn(
                  'whitespace-normal w-full pt-2 rounded-lg text-lg p-4',
                  { 'cursor-no-pointer': !scrollEndReached[value] },
                )}
                disabled={!scrollEndReached[value]}
              >
                <Typography variant="h6" className="text-secondary-foreground">
                  <p>
                    {buttonContent}
                  </p>
                </Typography>
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        onClick={() => {}}
        disabled={!allRead || !allScrolled}
        className="mt-4"
      >
        <Typography variant="h6">
          LETS CREATE YOUR PROFILE
        </Typography>
      </Button>
    </div>
  )
}
