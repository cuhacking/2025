import chevronUpDown from '@cuhacking/shared/assets/icons/general/chevron-up-down-white-1.svg'
import { cn } from '@cuhacking/shared/utils/cn'
import { CheckIcon } from 'lucide-react'
import * as React from 'react'
import * as RPNInput from 'react-phone-number-input'

import flags from 'react-phone-number-input/flags'
import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Input } from './input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover'
import { ScrollArea } from './scroll-area'

type PhoneInputProps = Omit<
  React.ComponentProps<'input'>,
  'onChange' | 'value' | 'ref'
> &
Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
  onChange?: (value: RPNInput.Value) => void
}

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => (
  <Input
    className={cn('rounded-e-lg rounded-s-none', className)}
    {...props}
    ref={ref}
  />
))

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps>
  = React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn('flex items-center !px-0 gap-x-3 border-none !bg-transparent', className)}
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          smartCaret={false}
          /**
           * Handles the onChange event.
           *
           * react-phone-number-input might trigger the onChange event as undefined
           * when a valid phone number is not entered. To prevent this,
           * the value is coerced to an empty string.
           *
           * @param {E164Number | undefined} value - The entered value
           */
          onChange={value => onChange?.(value || ('' as RPNInput.Value))}
          {...props}
        />
      )
    },
  )
PhoneInput.displayName = 'PhoneInput'

InputComponent.displayName = 'InputComponent'

interface CountryEntry { label: string, value: RPNInput.Country | undefined }

interface CountrySelectProps {
  disabled?: boolean
  value: RPNInput.Country
  options: CountryEntry[]
  onChange: (country: RPNInput.Country) => void
}

function CountrySelect({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex backdrop-blur-md bg-card hover:bg-white/10 gap-0.5 border-border rounded-lg pl-0.5 pr-1.5 py-1.5 focus:z-10 h-auto"
          disabled={disabled}
        >

          <img src={chevronUpDown} className="h-6 w-6" />

          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] bg-background p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value
                    ? (
                        <CountrySelectOption
                          key={value}
                          country={value}
                          countryName={label}
                          selectedCountry={selectedCountry}
                          onChange={onChange}
                        />
                      )
                    : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country
  onChange: (country: RPNInput.Country) => void
}

function CountrySelectOption({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`}
      />
    </CommandItem>
  )
}

function FlagComponent({ country, countryName }: RPNInput.FlagProps) {
  const Flag = flags[country]

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  )
}

export { PhoneInput }
