import type { ChangeEvent, ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import grid from '@cuhacking/shared/assets/icons/general/grid.svg'
import minus from '@cuhacking/shared/assets/icons/general/minus-1.svg'
import plus from '@cuhacking/shared/assets/icons/general/plus-1.svg'
import { Button } from '@cuhacking/shared/ui/button'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import {
  Input,
} from '@cuhacking/shared/ui/input'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'
import { useState } from 'react'

interface NumberFieldProps {
  name: string
  form: UseFormReturn<any>
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
  isRequired: boolean
  handleIncrement: () => void
  handleDecrement: () => void
  isDisabled?: boolean
  info?: ReactNode
}

export function NumberField({
  name,
  form,
  value,
  onChange,
  label,
  isRequired,
  handleIncrement,
  handleDecrement,
  isDisabled,
  info,
}: NumberFieldProps) {
  const [validInput, setValidInput] = useState(false)
  return (
    <GlassmorphicCard className={cn('max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800 border')} variant={info ? 'info' : 'default'} info={info}>
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem className="w-full">
            <div className="flex-col w-full justify-start items-start inline-flex">
              <div className="justify-start items-center inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
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
              </div>

              <div className="flex w-full justify-between items-center ">
                <div className="flex grow justify-start items-center py-1.5 gap-3">
                  <img src={grid} alt="" className="size-6" />
                  <FormControl>
                    <Typography variant="paragraph-base" className="w-full">
                      <Input
                        placeholder="X"
                        type="number"
                        value={value}
                        onChange={onChange}
                        className="w-full py-[1px]"
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
                  </FormControl>
                </div>
                <div className="flex-shrink-0 flex gap-1">
                  <Button
                    type="button"
                    className="cursor-pointer flex-shrink-0 p-1 h-auto w-auto"
                    variant="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDecrement()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.stopPropagation()
                        handleDecrement()
                      }
                    }}
                    tabIndex={0}
                    aria-label="Decrease value"
                  >
                    <img src={minus} alt="-" className="size-6" />
                  </Button>
                  <Button
                    type="button"
                    className="cursor-pointer flex-shrink-0 p-1 h-auto w-auto"
                    variant="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleIncrement()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.stopPropagation()
                        handleIncrement()
                      }
                    }}
                    tabIndex={0}
                    aria-label="Increase value"
                  >
                    <img src={plus} alt="+" className="size-6" />
                  </Button>
                </div>
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
