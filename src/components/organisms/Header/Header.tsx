import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Button from '@/components/molecules/Button/Button/Button'
import icon_message from '@/../public/images/icons/icon_message.svg'
import icon_notification from '@/../public/images/icons/icon_notification.svg'

export default function Header({ title }: { title?: string }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.buttons}>
          <Button
            type='button'
            onClick={() => { }}
            tooltip='Mensajes'
            tooltipOptions={{ position: 'bottom' }}
            variant='square'
          >
            <Image src={icon_message} alt='icon' />
          </Button>
          <Button
            type='button'
            onClick={() => { }}
            tooltip='Notificaciones'
            tooltipOptions={{ position: 'bottom' }}
            variant='square'
          >
            <Image src={icon_notification} alt='icon' />
          </Button>
        </div>
      </div>
    </div>
  )
}