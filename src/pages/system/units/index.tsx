import type { ReactElement } from 'react'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import type { NextPageWithLayout } from '@/pages/_app'
import Units from '@/components/organisms/system/Units/Units'

const Page: NextPageWithLayout = () => {
  return (
    <Units />
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
