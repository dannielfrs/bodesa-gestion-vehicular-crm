import React from 'react'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { Modal } from '@/components/atoms/Modal/Modal'
import Image from 'next/image'
import barrera from '@/../public/images/barrera.svg'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import Button from '../Button/Button/Button'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'

interface ComponentProps {
  title?: string
  subtitle?: string
  onSubmit?: any
  onHide?: any
}

export const ModalRejectRequest: React.FC<ComponentProps> = ({
  title,
  subtitle,
  onSubmit,
  onHide,
}) => {

  const methods = useForm()

  return (
    <Modal visible showHeader={false} className={styles.modal}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.modal_container}>
          <div className={styles.modal_header}></div>
          <div className={styles.modal_body}>
            <div className={styles.image}>
              <Image src={barrera} alt='icon' />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>{title}</p>
              <p className={styles.gray}>{subtitle}</p>
              <div style={{ width: '565px', marginTop: '30px' }}>
                <InputTextArea
                  name='comments'
                  label='Para continuar ingrese un motivo.'
                  placeholder=''
                  rows={5}
                  variant='primary'
                  optional
                  height='130px'
                  width='100%'
                />
              </div>
              <div className={styles.buttons}>
                <div style={{ width: '185px' }}>
                  <Button
                    type='button'
                    variant='secondary'
                    height='40px'
                    onClick={onHide}
                  >
                    Cancelar
                  </Button>
                </div>
                <div style={{ width: '185px' }}>
                  <Button
                    variant='primary'
                    height='40px'
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </Modal>
  )
}
