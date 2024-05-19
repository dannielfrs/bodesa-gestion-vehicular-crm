import { useEffect, type ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { AuthProvider } from '@/context/AuthProvider'
import { LayoutGuest } from '@/components/layouts/LayoutGuest/LayoutGuest'
import Login from '@/components/organisms/Login/Login'
import { getTokenGuestService } from '@/services/axios/passport/tokenGuest'

const Page: NextPageWithLayout = () => {

  useEffect(() => {
    getTokenGuestService()
  }, [])

  return (
    <Login />
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