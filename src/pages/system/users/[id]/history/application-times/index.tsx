import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import Record from '@/components/organisms/system/FuelLoad/RechargesCompleted/Record/Record'

const Page: NextPageWithLayout = () => {
  return (
    <Record />
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
