'use client'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
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
  firstname: z.string().max(100),
  middlename: z.string().optional(),
  lastname: z.string(),
  dateofgraduation: z.coerce.date(),
  tshirtSize: z.string(),
  gender: z.string(),
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
              <div className="flex justify-between items-center w-full">
                <span className="text-lg font-extrabold">Personal</span>
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
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-black border border-white"
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
                            className="bg-black border border-white"
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
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-black border border-white"
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
                    <FormLabel>Date of Graduation</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
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
                          className="bg-black border border-white"
                          disabled={isLoading}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your T shirt size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
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
                          className="bg-black border border-white"
                          disabled={isLoading}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
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
