// Importa los componentes necesarios de React y los estilos SCSS
import { useState } from 'react'
import styles from './styles.module.scss'
import { InputText as InputTextAtom } from '@/components/atoms/Input/InputText'
import Image from 'next/image'
import eyeopen from '@/../public/images/icons/eyeopen.svg'
import eyeclose from '@/../public/images/icons/eyeclose.svg'

// Define la interfaz del componente
interface ComponentProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  icon?: boolean;
  feedback?: boolean;
  rules?: Record<string, unknown>;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  visible?: boolean;
  required?: boolean;
  optional?: boolean;
  height?: string
}

// Define el componente InputPassword
export const InputPassword: React.FC<ComponentProps> = ({
  name,
  value,
  defaultValue = '',
  onChange = () => { },
  placeholder = '',
  label,
  icon = true,
  feedback,
  rules,
  readOnly = false,
  disabled = false,
  className = '',
  visible,
  required = false,
  optional = false,
}) => {
  // Define el estado para controlar la visibilidad del texto
  const [visibleText, setVisibleText] = useState(true);

  // Define el estado para controlar si el input es inválido
  const [isInvalid, setIsInvalid] = useState<string | null>(null);

  return (
    <div className={`${styles.input} ${className}`}>
      {/* Renderiza el label y el texto de requerido/opcional */}
      {label && (
        <div className={styles.input_labels}>
          <label htmlFor={name}>{label}</label>
          {/* Renderiza el texto de requerido/opcional */}
          <span className={styles.status}>
            {required && !optional && <span className={isInvalid ? styles.invalidSpan : ''}>Obligatorio</span>}
            {!required && optional && <span>Opcional</span>}
          </span>
        </div>
      )}
      {/* Renderiza el icono de visibilidad del texto */}
      {visible && visibleText ? (
        <span className={`${isInvalid ? styles.icon_right_invalid : styles.icon_right}`} onClick={() => setVisibleText(false)}><Image src={eyeclose} alt='' /></span>
      ) : (
        <span className={styles.icon_right} onClick={() => setVisibleText(true)}><Image src={eyeopen} alt='' /></span>
      )}
      <span className="p-input-icon-left">
        <InputTextAtom
          type={!visibleText ? 'text' : 'password'}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          rules={rules}
          readOnly={readOnly}
          disabled={disabled}
          onInvalid={(error) => setIsInvalid(error)}
          invalidClassName={styles.invalid}
          invalidMessageClassName={styles.invalid_message}
          className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        />
      </span>
    </div>
  )
}
