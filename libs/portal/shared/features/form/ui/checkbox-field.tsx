import type { UseFormReturn } from 'react-hook-form'
import { Checkbox } from '@cuhacking/shared/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'

interface CheckboxFieldProps {
  name: string
  form: UseFormReturn<any>
  label: string
  isRequired?: boolean
}

export function CheckboxField({ name, form, label, isRequired }: CheckboxFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex space-x-3 items-center">
          <FormControl>
            <Typography variant="paragraph-base">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="w-6 h-6 border-white/50 bg-transparent"
              />
            </Typography>

          </FormControl>
          <FormLabel onClick={() => { field.setValue(name, !field.value) }} className="text-white font-normal font-mono ">
            <Typography variant="paragraph-base">
              {label}
            </Typography>
          </FormLabel>
          {isRequired && <span className="text-red-600 text-sm font-mono">*</span>}
          <FormMessage />

        </FormItem>
      )}
    />
  )
}
