import type { ReactElement } from 'react'
import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import Home from "@/components/organisms/system/Home/Home"
import type { NextPageWithLayout } from '@/pages/_app'

const Page: NextPageWithLayout = () => {
  return (
    <Home />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Inicio'>
      {page}
    </LayoutAuth>
  )
}

export default Page
