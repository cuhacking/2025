'use client'
import phone from '@cuhacking/shared/assets/icons/general/phone-1.svg'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
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
  email: z.string().min(1, 'First name is required').max(100),
  phonenumber: z.string().optional(),
})

interface ContactFormProps {
  className?: string
  defaultValues?: Partial<z.infer<typeof formSchema>>
  isLoading?: boolean
  onSubmitSuccess?: (values: z.infer<typeof formSchema>) => void
}

export function ContactForm({
  className,
  defaultValues,
  isLoading = false,
  onSubmitSuccess,
}: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      email: '',
      phonenumber: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.success('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    onSubmitSuccess?.(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('w-full bg-black text-white font-mono', className)}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="personal">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="h-12 pt-3.5 pb-1.5 border-b border-white w-full flex justify-between items-center">
                <span className="text-white text-lg font-extrabold font-['JetBrains Mono'] leading-7">Contact</span>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 transition-transform duration-200',
                    'data-[state=open]:rotate-180',
                  )}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-6 space-y-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Email
                          <span className="text-red-600 text-sm font-normal font-['JetBrains Mono']">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            prefix={<div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal"><span>~&gt;</span></div>}
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

                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="middlename"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number
                          <span className="text-red-600 text-sm font-normal font-['JetBrains Mono']">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            prefix={<div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal"><img src={phone.src} alt="" /></div>}
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
