import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import FuelLoad from '@/components/organisms/system/FuelLoad/FuelLoad'
import type { NextPageWithLayout } from '@/pages/_app'
import { FuelLoadProvider } from '@/context/authenticated/fuelLoad/FuelLoadProvider'
import Users from '@/components/organisms/system/Users/Users'
import CreateUser from '@/components/organisms/system/Users/CreateUser/CreateUser'

const Page: NextPageWithLayout = () => {
  return (
    <CreateUser />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <FuelLoadProvider>
      <LayoutAuth title='Usuarios'>
        {page}
      </LayoutAuth>
    </FuelLoadProvider>
  )
}

export default Page
