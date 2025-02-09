import { SmartDatetimeInput } from '@cuhacking/shared/ui/date-time-picker'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { cn } from '@cuhacking/shared/utils/cn'

export function DatetimeField({ name, form, label, placeholder = 'dd-mm-yyyy', description, isRequired, isDisabled, info }: {
  name: string
  form: any
  label: string
  placeholder?: string
  description?: string
  isRequired?: boolean
  isDisabled?: boolean
  info?: {
    link: string
    body: string
  }
}) {
  return (
    <GlassmorphicCard className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800')} variant={info ? 'info' : 'default'}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-row gap-1">
              <FormLabel className="text-white text-sm font-mono">
                {label}
              </FormLabel>
              {isRequired && (
                <span className="text-red-600 text-sm font-mono">*</span>
              )}
            </div>
            <FormControl>
              <SmartDatetimeInput
                value={field.value}
                onValueChange={field.onChange}
                placeholder={placeholder}
                className="bg-transparent text-white text-base font-mono opacity-75 border-none focus:ring-0"
              />
            </FormControl>
            {description && (
              <FormDescription className="text-gray-400 text-xs font-mono">
                {description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
