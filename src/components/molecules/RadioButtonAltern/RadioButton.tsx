import { RadioButton as RadioButtonAtom } from '@/components/atoms/RadioButton/RadioButton'
import styles from './styles.module.scss'
import { useState } from 'react'

interface ComponentProps {
  name: string
  inputId?: string
  value?: any
  setValue?: (name: string) => void
  defaultValue?: any
  label?: string
  comment?: string
  variant?: string
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  className?: string
}

export const RadioButton: React.FC<ComponentProps> = ({
  name,
  inputId,
  value,
  setValue,
  defaultValue,
  label,
  comment,
  variant = 'primary',
  rules,
  readOnly = false,
  disabled = false,
  className = ''
}) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={`${styles.radiobutton} ${styles[variant]} ${checked ? styles.radiobutton_checked : ''} ${className}`}>
      <RadioButtonAtom
        name={name}
        inputId={inputId}
        value={value}
        setValue={setValue}
        defaultValue={defaultValue}
        onChecked={(checked) => setChecked(checked)}
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      />
      <label htmlFor={inputId}>{label}<span>{comment}</span></label>
    </div>
  )
}