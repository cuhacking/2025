import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import chevronUpDown from '@cuhacking/shared/assets/icons/general/chevron-up-down-white-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@cuhacking/shared/ui/command'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@cuhacking/shared/ui/popover'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'
import { Check } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

interface ComboboxFieldProps {
  name: string
  form: UseFormReturn<any>
  label: string
  options: { value: string, label: string }[]
  isRequired: boolean
  isDisabled?: boolean
  info?: ReactNode
}

export function ComboboxField({
  name,
  form,
  label,
  options,
  isRequired,
  isDisabled,
  info,
}: ComboboxFieldProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('auto')

  useEffect(() => {
    if (triggerRef.current) {
      setWidth(`${triggerRef.current.offsetWidth}px`)
    }
  }, [open])

  const [validInput, setValidInput] = useState(false)
  return (
    <GlassmorphicCard
      className={cn(
        'max-h-min p-2 flex flex-col justify-start items-start',
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
            <div className="w-full max-w-full flex-col justify-start items-start inline-flex">
              <div className="justify-start items-center inline-flex">
                <div className="justify-start items-center flex flex-wrap">
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
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger ref={triggerRef} className="w-full max-w-full" asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="border border-border backdrop-blur-md bg-card hover:bg-white/10 justify-start max-w-inherit p-1.5 gap-1.5 h-auto"
                  >
                    <img src={chevronUpDown} className="size-6" />
                    <span
                      className={cn(
                        'truncate',
                        (!field.value || field.value === 'Search') && 'text-muted text-base font-light italic',
                      )}
                    >
                      {field.value
                        ? options.find(option => option.value === field.value)?.label
                        : 'Search'}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent style={{ width }} className="p-0 bg-background">
                  <Command>
                    <CommandInput
                      placeholder="Search option..."
                    />
                    <CommandList>
                      <CommandEmpty>No option found.</CommandEmpty>
                      <CommandGroup>
                        {options.map(option => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(currentValue) => {
                              field.onChange(currentValue === field.value ? '' : currentValue)
                              setOpen(false)
                              if (!(currentValue === field.value)) {
                                setValidInput(true)
                              }
                              else {
                                setValidInput(false)
                              }
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 min-w-4 min-h-4',
                                field.value === option.value ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
