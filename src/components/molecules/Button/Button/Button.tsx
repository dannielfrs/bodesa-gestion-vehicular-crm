import { Button as ButtonAtom } from '@/components/atoms/Button'
import styles from './styles.module.scss'
import React from 'react'

interface ComponentProps {
  variant?: string;
  height?: string;
  width?: string;
  type?: "submit" | "reset" | "button";
  fontSize?: string;
  className?: string;
  icon?: string;
  loading?: boolean;
  borderRadius?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  tooltip?: string;
  tooltipOptions?: { position: string; className?: string };
  onClick?: () => void;
  style?: any;
}

const Button: React.FC<ComponentProps> = (props) => {
  const {
    variant = 'primary',
    height = '',
    width = '',
    className = '',
    disabled,
    borderRadius = '',
    children,
    fontSize,
    style
  } = props

  const styleCustom = {
    height, width, borderRadius, fontSize
  }

  return (
    <ButtonAtom
      {...props}
      className={`${styles.button} ${styles[variant]} ${className} ${disabled ? styles.button_disabled : ''}`}
      style={{ ...styleCustom, ...style }}
    >
      {children}
    </ButtonAtom>
  )
}

export default Button
