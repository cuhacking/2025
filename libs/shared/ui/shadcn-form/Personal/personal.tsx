'use client'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react'
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
import { Button } from '../../shadcn/button'
import { Calendar } from '../../shadcn/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../shadcn/form'
import { Input } from '../../shadcn/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../shadcn/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../shadcn/select'

const formSchema = z.object({
  firstname: z.string().min(1, 'First name is required').max(100),
  middlename: z.string().optional(),
  lastname: z.string().min(1, 'Last name is required'),
  dateofgraduation: z.coerce.date(),
  tshirtSize: z.string().min(1, 'T-shirt size is required'),
  gender: z.string().min(1, 'Gender is required'),
})

interface PersonalFormProps {
  className?: string
  defaultValues?: Partial<z.infer<typeof formSchema>>
  isLoading?: boolean
  onSubmitSuccess?: (values: z.infer<typeof formSchema>) => void
}

export function PersonalForm({
  className,
  defaultValues,
  isLoading = false,
  onSubmitSuccess,
}: PersonalFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      dateofgraduation: new Date(),
      firstname: '',
      lastname: '',
      tshirtSize: '',
      gender: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'You submitted the following values:',
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
                <span className="text-white text-lg font-extrabold font-['JetBrains Mono'] leading-7">Personal</span>
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
                          First Name
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
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            prefix={<div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal"><span>~&gt;</span></div>}
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

                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          Last Name
                          <span className="text-red-600 text-sm font-normal font-['JetBrains Mono']">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            prefix={<div className="w-6 text-center text-white text-base font-normal font-['JetBrains Mono'] leading-normal"><span>~&gt;</span></div>}
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

              <FormField
                control={form.control}
                name="dateofgraduation"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-1">
                      Date of Graduation
                      <span className="text-red-600 text-sm font-normal font-['JetBrains Mono']">*</span>
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'h-[48px] w-[240px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl',
                              'text-left font-normal pl-3',
                              !field.value && 'text-white/50',
                            )}
                            disabled={isLoading}
                          >
                            {field.value
                              ? (
                                  format(field.value, 'PPP')
                                )
                              : (
                                  <span>Pick a date</span>
                                )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                        style={{ backgroundColor: 'black' }}
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={isLoading}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="tshirtSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>T shirt size</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isLoading}
                        >
                          <FormControl>
                            <SelectTrigger className="h-[48px] w-[320px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl">
                              <SelectValue placeholder="Select your T shirt size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
                            className="bg-[#1e1e1e]/40 border border-white/20"
                          >
                            <SelectItem value="XS">XS</SelectItem>
                            <SelectItem value="S">S</SelectItem>
                            <SelectItem value="M">M</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                            <SelectItem value="XL">XL</SelectItem>
                            <SelectItem value="2XL">2XL</SelectItem>
                            <SelectItem value="3XL">3XL</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={isLoading}
                        >
                          <FormControl>
                            <SelectTrigger className="h-[48px] w-[320px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl">
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
                            className="bg-[#1e1e1e]/40 border border-white/20"
                          >
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="non-binary">Non-binary</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
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
