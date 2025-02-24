import type { Option } from '@cuhacking/shared/ui/multi-select'
import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-form-hook'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import MultipleSelector from '@cuhacking/shared/ui/multi-select'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'

export interface MultiSelectFieldProps {
  name: string
  form: UseFormReturn<any>
  label: string
  isRequired?: boolean
  options: Option[]
  isDisabled?: boolean
  info?: ReactNode
  className?: string
}

export function MultiSelectField({
  name,
  form,
  label,
  isRequired,
  options,
  isDisabled,
  info,
  className,
}: MultiSelectFieldProps) {
  return (
    <GlassmorphicCard
      className={cn(
        'max-h-min p-2 flex flex-col justify-start items-start gap-0.5',
        className,
        isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800 border',
      )}
      variant={info ? 'info' : 'default'}
      info={info}
    >
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem className="w-full">
            <div className="flex-col w-full justify-start items-start inline-flex">
              <div className="justify-start items-center inline-flex">
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

              <div className="max-w-full w-full rounded-md justify-between items-center gap-3 flex">
                <FormControl>
                  <Typography variant="paragraph-base" className="w-full">
                    <MultipleSelector
                      name={name}
                      form={form}
                      value={form.getValues(name)}
                      options={options}
                      placeholder="Select options..."
                      className="w-full"
                      badgeClassName="border-background border-2"

                    />
                  </Typography>

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
