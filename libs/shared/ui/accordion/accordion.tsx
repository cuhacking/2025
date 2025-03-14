import chevronDown from '@cuhacking/shared/assets/icons/general/chevron-down-1.svg'
import { cn } from '@cuhacking/shared/utils/cn'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { isLeft?: boolean }
>(({ className, children, isLeft, noChevron, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex min-h-10">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 w-full py-0.5 font-medium transition-all hover:underline [&[data-state=open]>img]:rotate-180 gap-3 text-left hover:cursor-pointer',
        className,
        !isLeft && 'justify-between',
      )}
      {...props}
    >
      {isLeft && !noChevron ? <img alt="Accordion chevron" src={chevronDown} className="size-6  transition-transform duration-200 flex-shrink-0" /> : null}
      {children}
      {!isLeft && !noChevron ? <img alt="Accordion chevron" src={chevronDown} className="size-6 transition-transform duration-200 shrink-0" /> : null}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="text-left overflow-hidden text-sm transition-all w-full data-[state=closed]:animate-accordion-up data-[state=open]:overflow-visible data-[state=open]:animate-accordion-down data-[sate=closed]:overflow-hidden"
    {...props}
  >
    <div className={cn('pb-2 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
