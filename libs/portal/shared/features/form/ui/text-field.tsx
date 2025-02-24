import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import arrowIcon from '@cuhacking/shared/assets/icons/general/arrow-1.svg'
import linkIcon from '@cuhacking/shared/assets/icons/general/link-1.svg'
import tildeIcon from '@cuhacking/shared/assets/icons/general/tilde-1.svg'
import emailIcon from '@cuhacking/shared/assets/icons/socials/email-white-1.svg'
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

interface TextFieldProps {
  name: string
  form: UseFormReturn<any>
  placeholder: string
  label: string
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
  infoIcon?: 'info' | 'linkedin'
  variant: 'text' | 'link' | 'email'
}

export function TextField({ variant, name, form, placeholder, label, isRequired, info, infoIcon, isDisabled }: TextFieldProps) {
  let imgSrc
  switch (variant) {
    case 'text':
      imgSrc = arrowIcon
      break
    case 'link':
      imgSrc = linkIcon
      break
    case 'email':
      imgSrc = emailIcon
      break
    default:
      imgSrc = arrowIcon
  }

  const [validInput, setValidInput] = useState(false)
  return (
    <GlassmorphicCard className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'border-transparent text-muted')} variant={info ? 'info' : 'default'} infoIcon={infoIcon || 'info'} info={info}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
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
            <div className="w-full self-stretch rounded-md flex items-center gap-3">
              <div className="py-1.5 grow basis-0 flex items-start gap-3 w-full">
                <img
                  alt={`${variant} icon`}
                  src={isDisabled ? tildeIcon : imgSrc}
                  className={cn('size-6', isDisabled && 'opacity-25')}
                />

                <Typography variant="paragraph-base" className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      placeholder={placeholder}
                      type="text"
                      value={field.value || ''}
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
                  </FormControl>
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
