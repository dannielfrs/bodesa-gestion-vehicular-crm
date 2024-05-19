import React, { useEffect, useRef, useState } from 'react'
import styles from './UserHistory.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import user from '@/../public/images/user.jpg'
import { useRouter } from 'next/navigation'
import { TabPanel, TabView } from 'primereact/tabview'
import Button from '@/components/molecules/Button/Button/Button'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/users/history/dataTable'
import dataTable2 from '@/services/fake/users/history/dataTable2'
import DataTableActions from '@/components/molecules/DataTableActions/DataTableActions'
import odometro from '@/../public/images/odometro.jpg'
import ticket from '@/../public/images/ticket.jpg'
import voucher from '@/../public/images/voucher.jpg'
import { Galleria } from 'primereact/galleria'
import pago from '@/../public/images/pago.jpg'

interface Branch {
  vehicle?: string
  taller?: string
  date?: string
  user?: string
  name?: string
  hour?: string
  avatar?: string
}

export default function UserHistory () {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [search, setSearch] = useState('')
  const tabs = [
    { id: 0, label: 'Recargas de combustible' },
    { id: 1, label: 'Mantenimiento' }
  ]
  const [branchs2, setBranchs2] = useState<Branch[]>([])
  const actionsBodyTemplate = (rowData: any) => {
    return (
      <DataTableActions
      photoButton={true}
      showButton={true}
      //@ts-ignore
      onClickPhoto={() => galleria3.current.show()}
      onClickShow={() => router.push('/system/users/id/history/show-maintenance')}
      />
    )
  }
  const datatableColumns2 = [
    { field: 'folio', header: 'Folio', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'vehicle', header: 'Vehículo', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'placa', header: 'Placa', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'date', header: 'Fecha / hora de solicitud', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'type', header: 'Tipo', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'taller', header: 'Taller asignado', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'deliverydate', header: 'Fecha / hora de entrega', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'total', header: 'Total del servicio', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'actions', header: 'Acciones', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(6)
      setBranchs2(data)
    }
    fetchData()
  }, [])

  const [branchs, setBranchs] = useState<Branch[]>([])
  const actionsBodyTemplate2 = (rowData: any) => {
    return (
      <DataTableActions
        photoButton={true}
        ticketButton={true}
        showButton={true}
        //@ts-ignore
        onClickPhoto={() => galleria.current.show()}
        //@ts-ignore
        onClickTicket={() => galleria2.current.show()}
        onClickShow={() => router.push('/system/users/id/history/application-times')}
      />
    )
  }
  const datatableColumns = [
    { field: 'folio', header: 'Folio', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'date', header: 'Vehículo', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'kilometraje', header: 'Placa', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'combustible', header: 'Fecha / hora de solicitud', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'rendimiento', header: 'Tipo', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'hourdate', header: 'Taller asignado', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'time', header: 'Fecha / hora de entrega', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'total', header: 'Total del servicio', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'actions', header: 'Acciones', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate2, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable2(6)
      setBranchs(data)
    }
    fetchData()
  }, [])

  const dataPhotos = [
    {
      id: 1,
      image: odometro,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del odómetro'
    },
    {
      id: 2,
      image: ticket,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del ticket'
    },
    {
      id: 3,
      image: voucher,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del voucher'
    },
  ]

  const galleria = useRef(null)
  const [images, setImages] = useState(dataPhotos)
  const responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

  useEffect(() => {
    setImages(dataPhotos)
  }, [])

  const itemTemplate = (item: { image: string; alt: string }) => {
    return <Image src={item.image} alt={item.alt} style={{ width: '100%', height: '50%', display: 'block' }} />;
  }

  const dataPhotos2 = [
    {
      id: 1,
      image: pago
    }
  ]
  const galleria2 = useRef(null)
  const [images2, setImages2] = useState(dataPhotos2)
  const responsiveOptions2 = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

  useEffect(() => {
    setImages2(dataPhotos2)
  }, [])

  const itemTemplate2 = (item: { image: string; alt: string }) => {
    return <Image src={item.image} alt={item.alt} style={{ width: '100%', height: '50%', display: 'block' }} />;
  }


  const dataPhotos3 = [
    {
      id: 1,
      image: odometro,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del odómetro'
    },
    {
      id: 2,
      image: ticket,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del ticket'
    },
    {
      id: 3,
      image: voucher,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del voucher'
    },
  ]

  const galleria3 = useRef(null)
  const [images3, setImages3] = useState(dataPhotos3)
  const responsiveOptions3 = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

  useEffect(() => {
    setImages(dataPhotos3)
  }, [])

  const itemTemplate3 = (item: { image: string; alt: string }) => {
    return <Image src={item.image} alt={item.alt} style={{ width: '100%', height: '50%', display: 'block' }} />;
  }
  
  return (
    <>
      <div className={styles.UserHistory}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.back} onClick={() => router.push('/system/users')}>
              <Image src={IconBack} alt='' />
            </div>
            <div className={styles.user}>
              <Image src={user} alt='' />
            </div>
            <p className={styles.name}>Gabriel Mendoza Villaseñor</p>
            <p className={styles.type}>Chofer</p>
          </div>
        </div>
        <div className={styles.tabsRequest}>
          <div className={styles.tabsBtns}>
            <div className={styles.contTabs}>
              {tabs.map((e) => {
                return (
                  <div key={e.id} className={styles.cont_tabs}>
                    <div style={{ width: '223px' }}>
                      <Button
                        type='button'
                        onClick={() => setActiveIndex(e.id)}
                        className={`${activeIndex === e.id && styles.active}`}
                        variant={activeIndex === e.id ? 'primary' : 'secondary'}
                        height='42px'
                      >
                        {e.label}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.container}>
            <TabView
              className={styles.tabView}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel className={styles.TabPanel}>
                <div style={{marginTop: '60px'}}>
                  <DataTable
                    columns={datatableColumns}
                    data={branchs}
                    loading={false}
                    selectionMode='single'
                    variant='primary'
                    search={search}
                    paginatorNone
                  />
                </div>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }}
                  circular fullScreen showItemNavigators item={itemTemplate} />
                <Galleria ref={galleria2} value={images2} responsiveOptions={responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                  circular fullScreen showItemNavigators={false} item={itemTemplate2} />
              </TabPanel>
              <TabPanel className={styles.TabPanel}>
                <div style={{marginTop: '60px'}}>
                  <DataTable
                    columns={datatableColumns2}
                    data={branchs2}
                    loading={false}
                    selectionMode='single'
                    variant='primary'
                    search={search}
                    paginatorNone
                  />
                </div>
                <Galleria ref={galleria3} value={images3} responsiveOptions={responsiveOptions3} numVisible={9} style={{ maxWidth: '50%' }}
                  circular fullScreen showItemNavigators item={itemTemplate3} />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </>
  )
}
