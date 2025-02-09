import type { ChangeEvent, ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import grid from '@cuhacking/shared/assets/icons/general/grid.svg'
import minus from '@cuhacking/shared/assets/icons/general/minus-1.svg'
import plus from '@cuhacking/shared/assets/icons/general/plus-1.svg'

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
import { cn } from '@cuhacking/shared/utils/cn'

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
  return (
    <GlassmorphicCard className={cn('max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800 border')} variant={info ? 'info' : 'default'} info={info}>
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem className="w-full">
            <div className="flex-col w-full justify-start items-start gap-0.5 inline-flex">
              <div className="h-5 justify-start items-center inline-flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <FormLabel className="text-white text-sm font-normal font-mono leading-tight">
                    {label}
                  </FormLabel>
                  <span className="text-red-600 text-sm font-normal font-mono leading-tight">
                    {isRequired ? '*' : null}
                  </span>
                </div>
              </div>

              <div className="max-w-full w-full py-0.5 rounded-md justify-between items-center gap-3 flex">
                <div className="grow flex justify-start items-center gap-3">
                  <div className="w-6 h-6 overflow-hidden">
                    <img src={grid} alt="" className="w-full h-full" />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="X"
                      type="number"
                      value={value}
                      onChange={onChange}
                      className="w-full opacity-50 text-white text-base font-thin font-mono leading-normal bg-transparent border-none focus:border-none focus:ring-0 p-0"
                    />
                  </FormControl>
                </div>
                <div className="flex shrink-0 justify-start items-center gap-1.5">
                  <div className="w-6 h-6 justify-center items-center flex overflow-hidden cursor-pointer" onClick={handleDecrement}>
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden">
                      <img src={minus} alt="-" className="w-full h-full" />
                    </div>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex overflow-hidden cursor-pointer" onClick={handleIncrement}>
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden">
                      <img src={plus} alt="+" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

    </GlassmorphicCard>
  )
}
