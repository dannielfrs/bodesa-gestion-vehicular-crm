import { Dropdown as DropdownAtom } from '@/components/atoms/Selects/Dropdown'
import { useState } from 'react'
import styles from './styles.module.scss'

interface DropdownProps {
  name: string
  value?: any
  defaultValue?: any
  onChange?: (e: any) => void
  options: any[]
  optionLabel?: string
  label?: string
  icon?: string
  dropdownIcon?: string
  placeholder?: string
  filter?: boolean
  variant?: string
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  height?: string
  loading?: boolean
  itemTemplate?: any
  valueTemplate?: any
  panelClassName?: string
  className?: string
  required?: boolean
  optional?: boolean
  error?: any
  style?: any
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  options,
  optionLabel = 'label',
  label,
  icon,
  dropdownIcon = 'i-arrow',
  placeholder = '- Selecciona una opción -',
  filter = false,
  variant = 'primary',
  rules,
  readOnly = false,
  disabled = false,
  height = '45px',
  loading = false,
  itemTemplate,
  valueTemplate,
  panelClassName,
  className = '',
  required = false,
  optional = false,
  error,
  style
}) => {
  const [isInvalid, setIsInvalid] = useState<any>(null)

  return (
    <div className={`${styles.dropdown} ${icon && styles.dropdown_icon} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.dropdown_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      {icon && <i className={icon} />}
      <DropdownAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        placeholder={placeholder}
        dropdownIcon={dropdownIcon}
        filter={filter}
        filterPlaceholder='Buscar'
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        loading={loading}
        onInvalid={(error) => setIsInvalid(error)}
        panelClassName={`${styles[variant]} ${panelClassName}`}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        itemTemplate={itemTemplate}
        valueTemplate={valueTemplate}
        height={height}
        style={{ height, ...style }}
      />
    </div>
  )
}
