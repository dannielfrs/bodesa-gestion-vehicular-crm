import { InputText as InputTextAtom } from '@/components/atoms/Input/InputText'
import { ChangeEvent } from 'react'
import styles from './styles.module.scss'

interface InputTextCodeProps {
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPaste?: () => void;
  placeholder?: string;
  rules?: any; // You can replace 'any' with the specific type for rules
  height?: string;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
}

const InputTextCode: React.FC<InputTextCodeProps> = ({
  name,
  type,
  value,
  defaultValue,
  onChange = () => { },
  onPaste = () => { },
  placeholder = '',
  rules,
  height,
  readOnly = false,
  disabled = false,
  className = '',
}) => {
  return (
    <InputTextAtom
      name={name || 'defaultName'}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onPaste={onPaste}
      placeholder={placeholder}
      rules={rules}
      maxLength={1}
      invalidClassName={styles.invalid}
      className={`${styles.input_code} ${className} ${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      style={{ height }}
    />
  )
}

export default InputTextCode
