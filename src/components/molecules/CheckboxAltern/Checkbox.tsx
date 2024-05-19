import { Checkbox as CheckboxAtom } from '@/components/atoms/Checkbox/Checkbox'
import styles from './styles.module.scss'

interface CheckboxProps {
  inputId?: string
  name: string
  value?: any
  defaultValue?: string
  onChange?: (e?: any) => void
  icon?: any
  label?: string
  tooltip?: string
  tooltipOptions?: any
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  variant?: string
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  inputId,
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  icon,
  label,
  tooltip,
  tooltipOptions,
  required = false,
  readOnly = false,
  disabled = false,
  variant = 'primary',
  className = ''
}) => {
  return (
    <div className={`${styles.checkbox} ${styles[variant]} ${className}`}>
      <CheckboxAtom
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        icon={icon}
        tooltip={tooltip}
        tooltipOptions={tooltipOptions}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      />
      {label && <label htmlFor={inputId}>{label}</label>}
    </div>
  )
}
