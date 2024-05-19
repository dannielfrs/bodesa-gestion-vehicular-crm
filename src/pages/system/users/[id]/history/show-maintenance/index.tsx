import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import ShowMaintenance from '@/components/organisms/system/Users/ShowUser/UserHistory/ShowMaintenance/ShowMaintenance'

const Page: NextPageWithLayout = () => {
  return (
    <ShowMaintenance />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Historial'>
    {page}
    </LayoutAuth>
  )
}

export default Page
