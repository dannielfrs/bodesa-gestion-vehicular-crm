import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import c from '@/../public/images/icons/c.svg'

export default function Footer (){
    return(
        <>
        <footer className={styles.footer}>
            <p>Control de Gasolina y Mantenimiento.CV</p>
            <Image src={c} alt=''/>
        </footer>
        </>
    )
}