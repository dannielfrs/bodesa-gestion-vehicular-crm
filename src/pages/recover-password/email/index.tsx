import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { AuthProvider } from '@/context/AuthProvider'
import { LayoutGuest } from '@/components/layouts/LayoutGuest/LayoutGuest'
import Email from '@/components/organisms/recoverPassword/Email/Email'

const Page: NextPageWithLayout = () => {
  return (
    <Email />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthProvider>
      <LayoutGuest headTitle='Gestión vehicular CRM'>
        {page}
      </LayoutGuest>
    </AuthProvider>
  )
}

export default Page
