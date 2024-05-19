import { Checkbox as CheckboxPrime } from 'primereact/checkbox'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'

interface CheckboxProps {
  name: string
  value?: any
  defaultValue?: any
  onChange?: (e?: any) => void
  icon?: any
  tooltip?: string
  tooltipOptions?: any
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  invalidClassName?: string
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  defaultValue,
  onChange = () => { },
  icon,
  tooltip,
  tooltipOptions,
  required = false,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  className = '',
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules: { required },
    defaultValue
  })

  const handleOnChange = useCallback((e: any) => {
    field.onChange(e.checked)
    onChange(e)
  }, [field, onChange])

  return (
    <CheckboxPrime
      {...field}
      name={name}
      inputId={field.name}
      inputRef={field.ref}
      onChange={handleOnChange}
      checked={field.value}
      icon={icon}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      readOnly={readOnly}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
    />
  )
}
