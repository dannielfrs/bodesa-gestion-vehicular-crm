import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import "@/styles/globals.scss"
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import { Exo } from 'next/font/google'

const exo = Exo({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //
  // Use the layout defined at the page level, if available
  //
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    getLayout(
      <main className={exo.className}>
        <Component {...pageProps} />
      </main>
    )
  )
}
