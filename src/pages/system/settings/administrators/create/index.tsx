import type { ReactElement } from 'react'
import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import type { NextPageWithLayout } from '@/pages/_app'
import Administrators from '@/components/organisms/system/Settings/Administrators/Adminitrators'
import CreateAdministrator from '@/components/organisms/system/Settings/Administrators/CreateAdministator/CreateAdministrator'

const Page: NextPageWithLayout = () => {
  return (
    <CreateAdministrator />
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
