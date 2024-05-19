import { Dropdown as DropdownPrime } from 'primereact/dropdown'
import { Skeleton } from 'primereact/skeleton'
import { ReactNode, useEffect } from 'react'
import { useController, FieldPath, FieldValues } from 'react-hook-form'

interface DropdownProps {
  name?: string
  value?: any
  defaultValue?: any
  onChange?: (e: any) => void
  options: any[]
  optionLabel?: string
  optionValue?: any
  placeholder?: string
  dropdownIcon?: string // Arrow icon of the dropdown.
  editable?: boolean
  loading?: boolean
  filter?: boolean
  filterIcon?: string
  filterPlaceholder?: string
  scrollHeight?: string // Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
  height?: string
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  onInvalid?: (error: any) => void
  invalidClassName?: string
  invalidMessageClassName?: string
  panelClassName?: string
  className?: string
  style?: React.CSSProperties
  itemTemplate?: ReactNode | ((option: any) => ReactNode)
  valueTemplate?: ReactNode | ((option: any, props: any) => ReactNode)
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  options,
  optionLabel,
  optionValue,
  placeholder = '',
  dropdownIcon,
  editable,
  loading = false,
  filter = false,
  filterIcon,
  filterPlaceholder,
  scrollHeight = '300px',
  height,
  rules,
  readOnly = false,
  disabled = false,
  onInvalid = () => { },
  invalidClassName = '',
  invalidMessageClassName = '',
  panelClassName = '',
  className = '',
  style,
  itemTemplate,
  valueTemplate,
  onFocus,
  onBlur,
}) => {
  //
  // react-hook-form controller
  //
  const { field, fieldState: { error } } = useController({
    name: name as FieldPath<FieldValues>,
    rules,
    defaultValue
  })
  //
  // When component changes update the react-hook-form value and execute onChange prop
  //
  const handleOnChange = (e: any) => {
    onChange(e)
    field.onChange(e.value)
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
    if (error) onInvalid(error)
  }, [error])

  return (
    loading
      ? <Skeleton width="100%" height={height} />
      : (
        <>
          <DropdownPrime
            {...field}
            name={name}
            value={field.value}
            onChange={handleOnChange}
            options={options}
            optionLabel={optionLabel}
            optionValue={optionValue}
            placeholder={placeholder}
            dropdownIcon={dropdownIcon}
            itemTemplate={itemTemplate}
            valueTemplate={valueTemplate}
            editable={editable}
            filter={filter}
            filterIcon={filterIcon}
            filterPlaceholder={filterPlaceholder}
            scrollHeight={scrollHeight}
            disabled={disabled || readOnly}
            panelClassName={panelClassName}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
        </>
      )
  )
}
