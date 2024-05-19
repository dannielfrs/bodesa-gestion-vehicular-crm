import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import CreateUnits from '@/components/organisms/system/Units/CreateUnits/CreateUnits'

const Page: NextPageWithLayout = () => {
  return (
    <CreateUnits />
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuth title='Unidades'>
    {page}
    </LayoutAuth>
  )
}

export default Page
