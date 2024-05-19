import { InputText as InputTextPrime } from 'primereact/inputtext'
import { memo, useEffect } from 'react'
import { useController, FieldValues, UseControllerReturn } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'

interface ComponentProps {
  name: string
  type?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  maxLength?: number
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  onFocus?: () => void
  onBlur?: () => void
  onInvalid?: (error: any) => void
  invalidClassName?: string
  invalidMessageClassName?: string
  className?: string
  style?: React.CSSProperties
  height?: string
  loading?: boolean
  onPaste?: () => void
}

export const InputText: React.FC<ComponentProps> = memo(({
  name,
  type = 'text',
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  maxLength,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  onInvalid = () => { },
  invalidClassName = '',
  invalidMessageClassName = '',
  className = '',
  style,
  height,
  loading = false,
  onPaste
}) => {
  //
  // react-hook-form controller
  //
  const { field, fieldState: { error } }: UseControllerReturn<FieldValues> = useController({
    name,
    rules,
    defaultValue,
  })
  //
  // When component changes update the react-hook-form value and execute onChange prop
  //
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    field.onChange(e.target.value)
  }
  //
  // Update the react-hook-form value when prop value changes
  //
  useEffect(() => {
    field.onChange(value)
  }, [value])
  //
  // Pass the react-hook-form error to a function to use it in the molecule
  //
  useEffect(() => {
    onInvalid(error)
  }, [error])

  return loading ? (
    <Skeleton width="100%" height={height} />
  ) : (
    <>
      <InputTextPrime
        {...field}
        name={name}
        type={type}
        value={field.value}
        onChange={handleOnChange}
        placeholder={placeholder}
        maxLength={maxLength}
        style={style}
        readOnly={readOnly}
        disabled={disabled}
        className={`${className} ${error ? invalidClassName : ''}`}
        onFocus={onFocus}
        onBlur={onBlur}
        onPaste={onPaste}
      />
      {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
    </>
  )
})

InputText.displayName = 'InputText'