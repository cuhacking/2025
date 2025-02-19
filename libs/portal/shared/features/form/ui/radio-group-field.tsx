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
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
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
          <FormItem className="flex flex-col gap-0.5 w-full h-auto justify-start items-start">
            <FormLabel>
              <Typography variant="paragraph-base">
                <p>
                  {label}
                  <span className="text-red-600 ml-1">
                    {isRequired ? '*' : null}
                  </span>
                </p>
              </Typography>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap justify-start gap-1 sm:gap-2 w-full"
              >
                {options.map(option => (
                  <div key={option.value}>
                    <RadioGroupItem value={option.value} id={option.value} className="peer sr-only w-full" />
                    <Label
                      htmlFor={option.value}
                      className="px-3 py-2 rounded-md flex flex-wrap items-center justify-center
                          text-sm font-extralight uppercase
                          cursor-pointer peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
