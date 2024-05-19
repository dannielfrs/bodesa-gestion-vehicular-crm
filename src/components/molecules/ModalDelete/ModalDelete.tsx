import React from 'react'
import styles from './ModalDelete.module.scss'
import { Modal } from '@/components/atoms/Modal/Modal'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import barrera from '@/../public/images/barrera.svg'
import Button from '../Button/Button/Button'

export default function ModalDelete ({onHide, onHide2, text1, text2, text3}: {onHide?: any, onHide2?: any, text1?: string, text2?: string, text3?: string}) {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => { }
  return (
    <>
      <Modal visible showHeader={false} className={styles.modal}>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.ModalDelete}>
            <div className={styles.modal_header} />
            <div className={styles.ContainerWhite}>
              <div className={styles.textImage}>
                <div className={styles.image}>
                  <Image src={barrera} alt='' />
                </div>
                <div className={styles.text}>
                  <p className={styles.blueBold}>{text1}</p>
                  <div className={styles.list}>
                    <ul>
                      <li>{text2}</li>
                      <li>{text3}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.buttons}>
                <div style={{ width: '185px' }}>
                  <Button variant='secondary' height='38px' onClick={onHide}>Cancelar</Button>
                </div>
                <div style={{ width: '185px' }}>
                  <Button variant='primary' height='38px' onClick={onHide2}>Continuar</Button>
                </div>
              </div>
            </div>
          </div>
        </FormHookProvider>
      </Modal>
    </>
  )
}
