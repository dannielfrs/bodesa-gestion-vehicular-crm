import React from 'react'
import styles from './Settings.module.scss'
import Image from 'next/image'
import IconOpen from '@/../public/images/icons/IconOpen.svg'
import { useRouter } from 'next/navigation'

export default function Settings () {
  const router = useRouter()
  const text = [
    {
      id: 1,
      title1: 'Tipos de cuenta',
      title2: 'Crea y administra permisos para el uso del sistema.',
      route: ''
    },
    {
      id: 2,
      title1: 'Lista de Administradores',
      title2: 'Crea nuevos usuarios. administra y activa y desactiva sus cuentas',
      route: '/system/settings/administrators'
    },
    {
      id: 3,
      title1: 'Catálogos',
      title2: 'Actualiza tú los precios de tus servicios.',
      route: ''
    },
    {
      id: 4,
      title1: 'Preguntas frecuentes',
      title2: 'Crea respuestas a preguntas  que generan los usuarios de la app',
      route: ''
    }
  ]
  return (
    <>
      <div className={styles.Settings}>
        <div className={styles.left}>
          {text.map((e, key) => {
            return (
              <div className={styles.contSettings} key={key} onClick={() => router.push(e.route)}>
                <div className={styles.left}>
                  <p>{e.title1}</p>
                  <p>{e.title2}</p>
                </div>
                <Image src={IconOpen} alt='' />
              </div>
            )
          })}
        </div>
        <div className={styles.contSettings} onClick={() => router.push('')}>
          <div className={styles.left}>
            <p>Contacto para App y Web</p>
            <p>Actualiza tu contacto para el soporte a talleres y usuarios de la App</p>
          </div>
          <Image src={IconOpen} alt='' />
        </div>
      </div>
    </>
  )
}
