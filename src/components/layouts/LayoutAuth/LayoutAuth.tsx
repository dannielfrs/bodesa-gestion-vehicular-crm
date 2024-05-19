import { ReactNode, memo } from 'react'
import styles from './LayoutAuth.module.scss'
import { Roboto_Flex as Roboto } from 'next/font/google'
import Sidebar from '@/components/organisms/Sidebar/Sidebar'
import Header from '@/components/organisms/Header/Header'
import { AuthProvider } from '@/context/AuthProvider'

interface LayoutAuthProps {
  children: ReactNode
  title: string
}

const robotoFont = Roboto({ subsets: ['latin'] })

export const LayoutAuth: React.FC<LayoutAuthProps> = memo(({ children, title }) => {

  return (
    <div className={`${styles.layout} ${robotoFont.className}`}>
      <div className={styles.layout_navbar}>
        <Header title={title} />
      </div>
      <div className={styles.layout_sidebar}>
        <AuthProvider>
          <Sidebar />
        </AuthProvider>
      </div>
      <main className={`${styles.layout_page} ${robotoFont.className}`}>
        {children}
      </main>
    </div>
  )
})

LayoutAuth.displayName = 'LayoutAuth'
