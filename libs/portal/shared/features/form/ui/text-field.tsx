import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import arrowIcon from '@cuhacking/shared/assets/icons/general/arrow-1.svg'
import linkIcon from '@cuhacking/shared/assets/icons/general/link-1.svg'
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

interface TextFieldProps {
  name: string
  form: UseFormReturn<any>
  placeholder: string
  label: string
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
  variant: 'text' | 'link' | 'email'
}

export function TextField({ variant, name, form, placeholder, label, isRequired, info, isDisabled }: TextFieldProps) {
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
  return (
    <GlassmorphicCard className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800')} variant={info ? 'info' : 'default'} info={info}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>
              <Typography variant="paragraph-base">
                <p>
                  {label}
                  <span className="text-red-600 text-sm font-normal font-mono leading-tight ml-1">
                    {isRequired ? '*' : null}
                  </span>
                </p>
              </Typography>
            </FormLabel>
            <FormControl>
              <div className="w-full self-stretch py-0.5 rounded-md flex items-center gap-3">
                <div className="items-center grow shrink basis-0 pb-0.5 flex items-start gap-3 w-full">
                  <img src={imgSrc} className="w-6 h-6" />
                  <Typography variant="paragraph-base">
                    <Input
                      {...field}
                      disabled={isDisabled}
                      placeholder={placeholder}
                      type="text"
                      value={field.value || ''}
                      className="w-full text-white"
                    />
                  </Typography>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>

  )
}
