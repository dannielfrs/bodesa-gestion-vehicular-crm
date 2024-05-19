import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import UserHistory from '@/components/organisms/system/Users/ShowUser/UserHistory/UserHistory'

const Page: NextPageWithLayout = () => {
  return (
    <UserHistory />
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
