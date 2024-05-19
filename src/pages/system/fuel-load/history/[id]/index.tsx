import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import Record from '@/components/organisms/system/FuelLoad/RechargesCompleted/Record/Record'
import { FuelLoadHistoryProvider } from '@/context/authenticated/fuelLoadHistory/FuelLoadHistoryProvider'

const Page: NextPageWithLayout = () => {
  return (
    <FuelLoadHistoryProvider>
      <Record />
    </FuelLoadHistoryProvider>
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
