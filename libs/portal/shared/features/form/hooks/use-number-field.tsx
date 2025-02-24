import { useCallback } from 'react'

// TOOD: FIX ANY
export function useNumberField(form: any, fieldName: string) {
  const value = form.watch(fieldName)

  const handleIncrement = useCallback(() => {
    form.setValue(fieldName, (value ?? 0) + 1, { shouldValidate: true }, {
      shouldValidate: true,
    })
  }, [form, fieldName, value])

  const handleDecrement = useCallback(() => {
    form.setValue(fieldName, Math.max(0, (value ?? 0) - 1), {
      shouldValidate: true,
    })
  }, [form, fieldName, value])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number.parseInt(e.target.value, 10) || undefined
      form.setValue(fieldName, newValue ? Math.max(0, newValue) : undefined)
    },
    [form, fieldName],
  )

  return { handleIncrement, handleDecrement, onChange }
}
