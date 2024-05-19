import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import DeleteUser from '@/components/organisms/system/Users/ShowUser/DeleteUser/DeleteUser'

const Page: NextPageWithLayout = () => {
  return (
    <DeleteUser />
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
