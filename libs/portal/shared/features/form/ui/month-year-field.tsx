import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import calendarIcon from '@cuhacking/shared/assets/icons/general/calendar-1.svg'
import chevronUpDown from '@cuhacking/shared/assets/icons/general/chevron-up-down-white-1.svg'
// Import shadcn combobox components and button.
// (Adjust the import paths as needed for your project)
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
import { useState } from 'react'

interface DateFieldProps {
  name: string
  form: UseFormReturn<any>
  label: string
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
}

export function MonthYearField({
  name,
  form,
  label,
  isRequired,
  isDisabled,
  info,
}: DateFieldProps) {
  // If there is an initial date value, extract its month and year.
  const initialDate = form.getValues(name)
  const initialMonth = initialDate ? (initialDate.getMonth() + 1).toString() : ''
  const initialYear = initialDate ? initialDate.getFullYear().toString() : ''

  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth)
  const [selectedYear, setSelectedYear] = useState<string>(initialYear)
  const [monthOpen, setMonthOpen] = useState<boolean>(false)
  const [yearOpen, setYearOpen] = useState<boolean>(false)

  // Define month options
  const monthOptions = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ]

  // Define a range of years starting from the current year.
  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: 11 }, (_, i) => {
    const year = (currentYear + i).toString()
    return { value: year, label: year }
  })

  // Update the form value when both month and year have been selected.
  const updateDate = (month: string, year: string) => {
    if (month && year) {
      const parsedMonth = Number.parseInt(month)
      const parsedYear = Number.parseInt(year)
      const newDate = new Date(parsedYear, parsedMonth - 1, 1)
      form.setValue(name, newDate)
    }
  }

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
        render={() => (
          <FormItem className="w-full">
            <div className="flex-col w-full justify-start items-startinline-flex">
              <div className="justify-start items-center inline-flex">
                <FormLabel>
                  <Typography variant="paragraph-base">
                    <p>
                      {label}
                      {isRequired && <span className="text-red-600 ml-1">*</span>}
                    </p>
                  </Typography>
                </FormLabel>
              </div>

              <div className="flex gap-x-3 w-full items-center">
                <img src={calendarIcon} alt="Calendar" className="size-6" />

                {/* Month Combobox */}
                <Popover open={monthOpen} onOpenChange={setMonthOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={monthOpen}
                      className="border border-border backdrop-blur-md bg-card hover:bg-white/10 justify-start p-1.5 pr-2.5 gap-1.5 h-min"
                      disabled={isDisabled}
                    >
                      <img src={chevronUpDown} className="size-6" />
                      <span
                        className={cn(
                          'truncate',
                          (!selectedMonth || selectedMonth === 'Month') && 'text-muted text-base font-light italic',
                        )}
                      >
                        {selectedMonth
                          ? monthOptions.find(o => o.value === selectedMonth)?.label
                          : 'Month'}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" sideOffset={8} className="p-0 bg-background">
                    <Command>
                      <CommandInput placeholder="Search month..." />
                      <CommandList>
                        <CommandEmpty>No month found.</CommandEmpty>
                        <CommandGroup>
                          {monthOptions.map(option => (
                            <CommandItem
                              key={option.value}
                              onSelect={() => {
                                setSelectedMonth(option.value)
                                updateDate(option.value, selectedYear)
                                setMonthOpen(false)
                              }}
                            >
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Year Combobox */}
                <Popover open={yearOpen} onOpenChange={setYearOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={yearOpen}
                      className="border border-border backdrop-blur-md bg-card hover:bg-white/10 justify-start p-1.5 pr-2.5 gap-1.5 h-min"
                      disabled={isDisabled}
                    >
                      <img src={chevronUpDown} className="size-6" />
                      <span
                        className={cn(
                          'truncate',
                          (!selectedYear || selectedYear === 'Year') && 'text-muted text-base font-light italic',
                        )}
                      >
                        {selectedYear
                          ? yearOptions.find(o => o.value === selectedYear)?.label
                          : 'Year'}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" className="p-0 bg-background">
                    <Command>
                      <CommandInput placeholder="Search year..." />
                      <CommandList>
                        <CommandEmpty>No year found.</CommandEmpty>
                        <CommandGroup>
                          {yearOptions.map(option => (
                            <CommandItem
                              key={option.value}
                              onSelect={() => {
                                setSelectedYear(option.value)
                                updateDate(selectedMonth, option.value)
                                setYearOpen(false)
                              }}
                            >
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
