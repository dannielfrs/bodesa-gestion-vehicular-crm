import React from 'react'
import styles from './styles.module.scss'
import { Modal } from '@/components/atoms/Modal/Modal'
import loadingPage from '@/../public/images/icons/loading_page.gif'
import Image from 'next/image'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  dismissableMask?: boolean
  className?: string
}

export const ModalLoading: React.FC<ComponentProps> = ({
  visible,
  onHide = () => { },
  dismissableMask,
  className = ''
}) => {
  return (
    <Modal
      visible={visible}
      onHide={onHide}
      closable={false}
      dismissableMask={dismissableMask}
      maximized
      className={className}
    >
      <div className={styles.section}>
        <Image
          src={loadingPage}
          alt='loading'
          width={260}
        />
        <div className={styles.section_message}>
          Cargando...
        </div>
      </div>
    </Modal>
  )
}
