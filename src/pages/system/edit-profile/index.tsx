import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import { FuelLoadProvider } from '@/context/authenticated/fuelLoad/FuelLoadProvider'
import EditProfile from '@/components/organisms/system/EditProfile/EditProfile'

const Page: NextPageWithLayout = () => {
  return (
    <EditProfile />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <LayoutAuth title='Mi perfil'>
        {page}
      </LayoutAuth>
  )
}

export default Page
