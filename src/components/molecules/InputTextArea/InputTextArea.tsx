import { InputTextArea as InputTextAreaAtom } from '@/components/atoms/Input/InputTextArea'
import styles from './styles.module.scss'

export const InputTextArea = ({
  name,
  type,
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  label,
  loading = false,
  variant = 'primary',
  height,
  width,
  maxLength,
  rows,
  rules,
  readOnly = false,
  disabled = false,
  className = '',
  required = false,
  optional = false,
  error
}: {
  name: string,
  type?: string,
  value?: string,
  defaultValue?: string,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  placeholder?: string,
  label?: string,
  loading?: boolean,
  variant?: string,
  height?: string,
  width?: string,
  maxLength?: number,
  rows?: number,
  rules?: any,
  readOnly?: boolean,
  disabled?: boolean,
  className?: string,
  required?: boolean,
  optional?: boolean,
  error?: string
}) => {

  return (
    <div className={`${styles.input} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.titles_inputs}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error ? styles.invalidSpan : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      <InputTextAreaAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        loading={loading}
        height={height}
        maxLength={maxLength}
        rows={rows}
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        style={{ height, width }}
      />
    </div>
  )
}
