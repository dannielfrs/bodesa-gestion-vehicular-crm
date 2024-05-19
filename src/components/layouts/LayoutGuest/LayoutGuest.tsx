import { ReactNode } from 'react'
import styles from './styles.module.scss'
import Head from 'next/head'
import Footer from '@/components/organisms/Footer/Footer'
import Image from 'next/image'
import whiteLogo from '@/../public/images/logo_blanco.png'

interface ComponentProps {
  headTitle?: string
  headDescription?: string
  children?: ReactNode
}

export const LayoutGuest: React.FC<ComponentProps> = ({ headTitle = '', headDescription = '', children }) => {

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name='description' content={headDescription} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.layout}>
        <div className={styles.layout_container}>
          <div className={styles.layout_logo}>
            <Image src={whiteLogo} alt='logo' />
          </div>
          <div className={styles.layout_content}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
