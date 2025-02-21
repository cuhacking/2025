import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import calendarIcon from '@cuhacking/shared/assets/icons/general/calendar-1.svg'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Input } from '@cuhacking/shared/ui/input'

import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'
import { format, isValid, parse } from 'date-fns'
import { useState } from 'react'

interface DateFieldProps {
  name: string
  form: UseFormReturn<any>
  label: string
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
}

export function DateField({
  name,
  form,
  label,
  isRequired,
  isDisabled,
  info,
}: DateFieldProps) {
  const [inputValue, setInputValue] = useState<string>(
    form.getValues(name) ? format(form.getValues(name), 'dd-MM-yyyy') : '',
  )
  return (
    <GlassmorphicCard
      className={cn(
        'min-w-min w-full p-2 max-h-min flex flex-col justify-start items-start gap-0.5',
        isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800',
      )}
      variant={info ? 'info' : 'default'}
      info={info}
    >
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <div className="flex-col w-full justify-start items-start gap-1 inline-flex">
              <div className="h-5 justify-start items-center inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
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
                </div>
              </div>

              <div className="flex gap-x-3 w-full py-1.5">
                <img src={calendarIcon} className="h-6 w-6" />
                <FormControl className="w-full">
                  <Input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    value={inputValue}
                    onChange={(e) => {
                      if (!e.target.value) {
                        form.setError(name, { message: 'Required' })
                      }
                      const input = e.target.value
                      setInputValue(input)
                      const parsedDate = parse(e.target.value, 'dd-MM-yyyy', new Date())
                      if (!Number.isNaN(parsedDate.getTime())) {
                        field.onChange(parsedDate)
                      }
                    }}
                    disabled={isDisabled}
                    className="w-full"
                    onBlur={(e) => {
                      const input = e.target.value
                      const parsedDate = parse(input, 'dd-MM-yyyy', new Date())
                      if (!input) {
                        form.setError(name, { message: 'Required' })
                        return
                      }
                      if (!isValid(parsedDate)) {
                        form.setError(name, { message: 'Must be a date in dd-mm-yyyy' })
                        return
                      }
                      if (parsedDate < new Date()) {
                        form.setError(name, { message: 'Expected graduation date must be in the future' })
                        return
                      }
                      form.clearErrors(name)
                      form.setValue(name, parsedDate)
                    }}
                  />
                </FormControl>
              </div>
            </div>

            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
