import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import FuelLoad from '@/components/organisms/system/FuelLoad/FuelLoad'
import type { NextPageWithLayout } from '@/pages/_app'
import { FuelLoadProvider } from '@/context/authenticated/fuelLoad/FuelLoadProvider'
import { FuelLoadRegisterProvider } from '@/context/authenticated/fuelLoadRegister/FuelLoadRegisterProvider'

const Page: NextPageWithLayout = () => {
  return (
    <FuelLoadProvider>
      <FuelLoadRegisterProvider>
        <FuelLoad />
      </FuelLoadRegisterProvider>
    </FuelLoadProvider>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Carga de combustible'>
      {page}
    </LayoutAuth>
  )
}

export default Page
