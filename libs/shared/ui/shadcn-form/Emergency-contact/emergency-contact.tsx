'use client'

import phone from '@cuhacking/shared/assets/icons/general/phone-1.svg'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'

import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../shadcn/accordion'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../shadcn/form'
import { Input } from '../../shadcn/input'

const formSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
})

interface EmergencyContactsProps {
  className?: string
  defaultValues?: Partial<z.infer<typeof formSchema>>
  isLoading?: boolean
  onSubmitSuccess?: (values: z.infer<typeof formSchema>) => void
}

export function EmergencyContacts({
  className,
  defaultValues,
  isLoading = false,
  onSubmitSuccess,
}: EmergencyContactsProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      fullName: '',
      relationship: '',
      phoneNumber: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmitSuccess?.(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('w-full bg-black text-white font-mono', className)}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="emergency">
            {/* Top header */}
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="h-12 pt-3.5 pb-1.5 border-b border-white w-full flex justify-between items-center">
                <span className="text-white text-lg font-extrabold font-['JetBrains Mono'] leading-7">
                  Emergency Contacts
                </span>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 transition-transform duration-200',
                    'data-[state=open]:rotate-180',
                  )}
                />
              </div>
            </AccordionTrigger>

            {/* Form Content */}
            <AccordionContent className="px-6 pt-6 space-y-8">
              <div className="grid grid-cols-12 gap-4">
                {/* Full Name Field */}
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Full Name
                          <span className="text-red-600 text-sm">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            prefix={(
                              <div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal">
                                <span>~&gt;</span>
                              </div>
                            )}
                            placeholder="type here"
                            className="h-[48px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl"
                            type="text"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Relationship Field */}
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="relationship"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Relationship
                          <span className="text-red-600 text-sm">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholderIcon={
                              <img className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal" src={phone.src} alt="" />
                            }
                            placeholder="type here"
                            className="h-[48px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl"
                            type="text"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone Number Field */}
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Phone Number
                          <span className="text-red-600 text-sm">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            prefix={(
                              <div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal">
                                <img src={phone.src} alt="" />
                              </div>
                            )}
                            placeholder="type here"
                            className="h-[48px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  )
}
