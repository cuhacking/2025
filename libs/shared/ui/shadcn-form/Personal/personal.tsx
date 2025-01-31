'use client'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { Calendar } from '../../../../external/shadcn/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../external/shadcn/components/ui/form'
import { Input } from '../../../../external/shadcn/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../../external/shadcn/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../external/shadcn/components/ui/select'
import { Button } from '../../button/button'

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
                    <div className="relative bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-white/20 text-white flex items-center px-3 py-2">
                      <div className="text-white text-base font-mono mr-2">
                        <span>~&gt;</span>
                      </div>
                      <Input
                        placeholder="type here"
                        className="placeholder:text-white/50 bg-transparent border-none w-full focus:ring-0"
                        {...field}
                      />
                    </div>
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
                    <div className="relative bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-white/20 text-white flex items-center px-3 py-2">
                      <div className="text-white text-base font-mono mr-2">
                        <span>~&gt;</span>
                      </div>
                      <Input
                        placeholder="type here"
                        className="placeholder:text-white/50 bg-transparent border-none w-full focus:ring-0"
                        {...field}
                      />
                    </div>
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
                    <div className="relative bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-white/20 text-white flex items-center px-3 py-2">
                      <div className="text-white text-base font-mono mr-2">
                        <span>~&gt;</span>
                      </div>
                      <Input
                        placeholder="type here"
                        className="placeholder:text-white/50 bg-transparent border-none w-full focus:ring-0"
                        {...field}
                      />
                    </div>
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
      </form>
    </Form>
  )
}
