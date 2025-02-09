import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Label } from '@cuhacking/shared/ui/label'
import { RadioGroup, RadioGroupItem } from '@cuhacking/shared/ui/radio-group'
import { cn } from '@cuhacking/shared/utils/cn'

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupFieldProps {
  form: UseFormReturn<any>
  name: string
  label: string
  options: RadioOption[]
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
}

export function RadioGroupField({ form, name, label, options, isRequired = false, info, isDisabled = false }: RadioGroupFieldProps) {
  return (
    <GlassmorphicCard info={info} className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800')} variant={info ? 'info' : 'default'}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full h-auto flex-col justify-start items-start inline-flex">
            <div className="w-full flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="h-5 justify-start items-center w-full inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <FormLabel className="text-white text-sm font-normal font-mono leading-tight">
                      {label}
                    </FormLabel>
                    {isRequired && (
                      <span className="text-red-600 text-sm font-normal font-mono leading-tight">*</span>
                    )}
                  </div>
                </div>

                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap justify-start gap-1 w-full"
                  >
                    {options.map(option => (
                      <div key={option.value} className="relative">
                        <RadioGroupItem value={option.value} id={option.value} className="peer sr-only w-full" />
                        <Label
                          htmlFor={option.value}
                          className="px-3 h-10 rounded-md flex items-center justify-center gap-2 text-white text-sm font-medium font-mono uppercase leading-tight cursor-pointer
                          peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </div>
            </div>
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
