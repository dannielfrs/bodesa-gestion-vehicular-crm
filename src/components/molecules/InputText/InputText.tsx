import { InputText as InputTextAtom } from '@/components/atoms/Input/InputText'
import styles from './styles.module.scss'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface ComponentProps {
  name: string;
  value?: string;
  label?: string;
  icon?: string | StaticImageData;
  iconPosRight?: boolean;
  variant?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  optional?: boolean;
  rules?: any
  placeholder?: string;
  filter?: boolean;
  imageStyle?: object;
  type?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<ComponentProps> = (props) => {
  const {
    name,
    label,
    icon,
    iconPosRight = false,
    variant = 'primary',
    height = '',
    className = '',
    imageStyle = {},
    disabled = false,
    readOnly = false,
    required = false,
    optional = false,
    filter = false
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [isInvalid, setIsInvalid] = useState<string>()

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const inputTextRender = () => {
    return (
      <InputTextAtom
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInvalid={(error) => setIsInvalid(error)}
        className={`${styles.input} ${styles[variant]} ${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        style={{ height }}
      />
    )
  }

  return (
    <div className={`${styles.inputWrapper} ${styles[variant]} ${isFocused ? styles.focused : ''} ${className}`}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      {/* {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
      {optional && <span>Opcional</span>} */}
      {icon ? (
        <span className={iconPosRight ? 'p-input-icon-right' : 'p-input-icon-left'}>
          {filter && <span className={styles.spanFilter}>Filtrar</span>}
          <Image className={styles.input_icon} src={icon} alt='icon' style={imageStyle} />
          {inputTextRender()}
        </span>
      ) : (
        inputTextRender()
      )}
    </div>
  )
}

export default InputText
