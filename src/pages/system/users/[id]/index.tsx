import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import ShowUser from '@/components/organisms/system/Users/ShowUser/ShowUser'

const Page: NextPageWithLayout = () => {
  return (
    <ShowUser />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Usuarios'>
    {page}
    </LayoutAuth>
  )
}

export default Page
