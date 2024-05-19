import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Toast } from 'primereact/toast'
import greenLight from '@/../public/images/icons/lights.png'

interface ComponentProps {
  visible?: boolean
  title?: string
  subtitle?: string
  className?: string
}

export const ToastSuccess: React.FC<ComponentProps> = ({
  visible,
  title,
  subtitle,
  className = ''
}) => {

  const toast = useRef<any>(null)

  useEffect(() => {
    if (visible) {
      toast.current.show({
        // life: 3000,
        sticky: true,
        content: () => (toastContent())
      })
    } else {
      toast.current.clear()
    }
  }, [visible])

  const toastContent = () => {
    return (
      <div className={styles.toast}>
        <Image
          src={greenLight}
          alt='icon'
          loader={({ src }) => src}
          width={10}
          height={10}
          className={styles.toast_image}
        />
        <div className={styles.toast_content}>
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
      </div>
    )
  }

  return (
    <Toast ref={toast} />
  )
}
