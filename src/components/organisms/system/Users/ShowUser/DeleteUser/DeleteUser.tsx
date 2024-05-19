import React, { useEffect, useRef, useState } from 'react'
import styles from './DeleteUser.module.scss'
import Image from 'next/image'
import dropQuestion from '@/../public/images/dropQuestion.png'
import señalcorrecto from '@/../public/images/icons/señalcorrecto.svg'
import { Toast } from 'primereact/toast'

export default function DeleteUser () {
  const toast = useRef(null)
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    if (toastVisible && toast.current) {
      // @ts-ignore
      toast.current.show({
        severity: 'secondary',
        life: 4000,
        content: (props: any) => (
          <div className={styles.dFlex}>
            <Image src={señalcorrecto} alt='' className={styles.imagePading} />
            <div className={styles.pR40pxW200}>
              <div className={styles.toastGreen}>Usuario eliminado</div>
              <div className={styles.toastGray}>Se ha eliminado el usuario correctamente</div>
            </div>
          </div>
        )
      })
    }
  }, [toastVisible])

  useEffect(() => {
    setTimeout(() => {
      setToastVisible(true)
    }, 1000)
  }, [])

  return (
    <>
      <Toast ref={toast} />
      <div className={styles.white} />
      <div className={styles.DeleteUser}>
        <div className={styles.imageDrop}>
          <Image src={dropQuestion} alt='' />
        </div>
        <p>Este usuario ya no se encuentra disponible</p>
      </div>
    </>
  )
}
