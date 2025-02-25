import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { PhoneInput } from '@cuhacking/shared/ui/phone-number'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'
import { useState } from 'react'

interface PhoneNumberFieldProps {
  form: UseFormReturn<any>
  name: string
  label: string
  isRequired?: boolean
  info?: ReactNode
}

export function PhoneNumberField({
  form,
  name,
  label,
  isRequired = false,
  info,
}: PhoneNumberFieldProps) {
  const [validInput, setValidInput] = useState(false)
  return (

    <GlassmorphicCard className="p-2 w-full" info={info} variant={info ? 'info' : 'default'}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full flex-col justify-start items-start inline-flex">
            <div className="flex-col w-full justify-start items-start flex">
              <div className="w-full flex-col justify-start items-start flex">
                <div className="flex">
                  <FormLabel>
                    <Typography variant="paragraph-base" className={cn(validInput && 'bg-greendiant bg-clip-text text-transparent')}>
                      <p>
                        {label}
                        <span className="text-red-600 ml-1">
                          {isRequired ? '*' : null}
                        </span>
                      </p>
                    </Typography>
                  </FormLabel>
                </div>
                <Typography variant="paragraph-base" className="w-full">
                  <PhoneInput
                    placeholder="+X XXX XXX XXXX"
                    {...field}
                    onBlur={async () => {
                      const valid = await form.trigger(name)
                      if (valid) {
                        setValidInput(true)
                      }
                      else {
                        setValidInput(false)
                      }
                    }}
                  />
                </Typography>
              </div>
            </div>
            {form.formState.errors[name]?.message && form.formState.errors[name]?.message !== 'Required' && (
              <FormMessage />
            )}
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
