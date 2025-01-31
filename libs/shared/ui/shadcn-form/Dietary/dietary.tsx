'use client'
import { cn } from '@cuhacking/shared/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../external/shadcn/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../external/shadcn/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../accordion/accordion'

const formSchema = z.object({
  mealRestriction: z.string(),
  allergy: z.string(),
})

interface DietaryFormProps {
  className?: string
  defaultValues?: Partial<z.infer<typeof formSchema>>
  isLoading?: boolean
  onSubmitSuccess?: (values: z.infer<typeof formSchema>) => void
}

export function DietaryForm({
  className,
  defaultValues,
  isLoading = false,
  onSubmitSuccess,
}: DietaryFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      mealRestriction: '',
      allergy: '',
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
          <AccordionItem value="dietary">
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="h-12 pt-3.5 pb-1.5 border-b border-white w-full flex justify-between items-center">
                <span className="text-white text-lg font-extrabold font-['JetBrains Mono'] leading-7">Dietary</span>
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
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="mealRestriction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meal Restriction</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="bg-black border border-white"
                          disabled={isLoading}
                        >
                          <FormControl className="h-[48px] w-[320px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl">
                            <SelectTrigger>
                              <SelectValue placeholder="Select your meal restriction" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
                          >
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="halal">Halal</SelectItem>
                            <SelectItem value="kosher">Kosher</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                    name="allergy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Allergy</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="bg-black border border-white"
                          disabled={isLoading}
                        >
                          <FormControl className="h-[48px] w-[320px] bg-[#1e1e1e]/40 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white/20 backdrop-blur-2xl">
                            <SelectTrigger>
                              <SelectValue placeholder="Select your allergy" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent
                            style={{ backgroundColor: 'black' }}
                          >
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="peanuts">Peanuts</SelectItem>
                            <SelectItem value="tree-nuts">Tree Nuts</SelectItem>
                            <SelectItem value="dairy">Dairy</SelectItem>
                            <SelectItem value="eggs">Eggs</SelectItem>
                            <SelectItem value="fish">Fish</SelectItem>
                            <SelectItem value="shellfish">Shellfish</SelectItem>
                            <SelectItem value="soy">Soy</SelectItem>
                            <SelectItem value="wheat">Wheat</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
