import type { ReactElement } from 'react'
import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import type { NextPageWithLayout } from '@/pages/_app'
import Administrators from '@/components/organisms/system/Settings/Administrators/Adminitrators'

const Page: NextPageWithLayout = () => {
  return (
    <Administrators />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Configuraciones'>
      {page}
    </LayoutAuth>
  )
}

export default Page
