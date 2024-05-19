import type { ReactElement } from 'react'
import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import type { NextPageWithLayout } from '@/pages/_app'
import Settings from '@/components/organisms/system/Settings/Settings'

const Page: NextPageWithLayout = () => {
  return (
    <Settings />
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
