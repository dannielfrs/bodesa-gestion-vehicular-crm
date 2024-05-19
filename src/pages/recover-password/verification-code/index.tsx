import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { AuthProvider } from '@/context/AuthProvider'
import { LayoutGuest } from '@/components/layouts/LayoutGuest/LayoutGuest'
import VerificationCode from '@/components/organisms/recoverPassword/VerificationCode/VerificationCode'

const Page: NextPageWithLayout = () => {
  return (
    <VerificationCode />
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
