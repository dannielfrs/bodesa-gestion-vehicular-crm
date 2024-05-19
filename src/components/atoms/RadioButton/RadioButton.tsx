import { RadioButton as RadioButtonPrime } from 'primereact/radiobutton'
import { useEffect } from 'react'
import { useController } from 'react-hook-form'

interface ComponentProps {
  name: string
  inputId?: string
  value?: any
  setValue?: (name: string) => void
  defaultValue?: any
  onChecked?: (value: any) => void
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  invalidClassName?: string
  className?: string
}

export const RadioButton: React.FC<ComponentProps> = ({
  name,
  inputId,
  value,
  setValue,
  defaultValue,
  onChecked,
  rules,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  className = ''
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules,
    defaultValue
  })

  useEffect(() => {
    if (onChecked) onChecked(field.value === value)
  }, [field.value])

  const handleChange = (e: any) => {
    field.onChange(e.target.value)
    if (setValue) setValue(e.target.value)
  }

  return (
    <RadioButtonPrime
      {...field}
      name={name}
      inputId={inputId}
      inputRef={field.ref}
      value={value}
      checked={field.value === value}
      onChange={(e) => handleChange(e)}
      disabled={disabled || readOnly}
      className={`${className} ${error ? invalidClassName : ''}`}
    />
  )
}