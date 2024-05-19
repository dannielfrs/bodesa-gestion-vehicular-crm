import { InputText as InputTextAtom } from '@/components/atoms/Input/InputText'
import styles from './styles.module.scss'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface InputTextProps {
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
  error?: string;
  placeholder?: string;
  rules?: any
  filter?: boolean;
  imageStyle?: object;
  type?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText2: React.FC<InputTextProps> = (props) => {
  const {
    name,
    label,
    icon,
    iconPosRight = false,
    variant = 'primary' || 'secondary',
    height = '',
    className = '',
    imageStyle = {},
    disabled = false,
    readOnly = false,
    required = false,
    optional = false,
    type = 'text' || 'number',
    filter = false,
    error = false,
    defaultValue,
    value,
    onChange
  } = props

  const [isInvalid, setIsInvalid] = useState<string | null>(null)

  const inputTextRender = () => {
    return (
      <InputTextAtom
        {...props}
        defaultValue={defaultValue}
        onInvalid={(error) => setIsInvalid(error)}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        style={{ height }}
      />
    );
  };

  return (
    <div className={`${styles.input} ${styles[variant]} ${className}`}>
      {label && (
        <div className={styles.input_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>
      )}
      {icon ? (
        <span style={{ width: '100%' }} className={iconPosRight ? 'p-input-icon-right' : 'p-input-icon-left'}>
          {filter && <span className={styles.spanFilter}>Filtrar</span>}
          <Image className={styles.imgSearch} src={icon} alt='icon' style={imageStyle} />
          {inputTextRender()}
        </span>
      ) : (
        inputTextRender()
      )}
    </div>
  )
}

export default InputText2