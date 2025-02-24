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
  TextArea,
} from '@cuhacking/shared/ui/text-area'
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
  infoIcon?: 'info' | 'linkedin'
  variant: 'text' | 'link' | 'email'
}

export function TextAreaField({ variant, name, form, placeholder, label, isRequired, info, infoIcon, isDisabled }: TextFieldProps) {
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
    <GlassmorphicCard className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'border-transparent text-muted')} variant={info ? 'info' : 'default'} infoIcon={infoIcon || 'info'} info={info}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
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
            <FormControl>
              <div className="w-full self-stretch rounded-md flex items-center gap-3">
                <div className="py-1.5 grow basis-0 flex items-start gap-3 w-full">
                  <img src={isDisabled ? tildeIcon : imgSrc} className={cn('size-6', isDisabled && 'opacity-25')} />
                  <Typography variant="paragraph-base" className="w-full">
                    <TextArea
                      {...field}
                      disabled={isDisabled}
                      placeholder={placeholder}
                      type="text"
                      value={field.value || ''}
                      className="w-full py-[1px]"
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
