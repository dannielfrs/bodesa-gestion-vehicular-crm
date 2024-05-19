import { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Image from 'next/image'
import tablero from '@/../public/images/tablero.svg'
import martillo from '@/../public/images/choque-de-martillo.svg'
import calendario from '@/../public/images/calendario.svg'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/home/dataTable'
import dataTable2 from '@/services/fake/home/dataTable2'
import CustomAvatar from '@/components/atoms/Avatar/Avatar'

interface Branch {
  vehicle?: string
  taller?: string
  date?: string
  user?: string
  name?: string
  hour?: string
  avatar?: string
}

export default function Home() {

  const [branchs2, setBranchs2] = useState<Branch[]>([])
  const [search, setSearch] = useState('')
  const [branchs, setBranchs] = useState<Branch[]>([])

  const cards = [
    {
      id: 1,
      text1: 'Cargas de combustible',
      text2: 'Solicitudes nuevas',
      number: '10',
      icon: tablero,
      className: styles.card
    },
    {
      id: 2,
      text1: 'Mantenimiento',
      text2: 'Solicitudes nuevas',
      number: '5',
      icon: martillo,
      className: styles.card2
    },
    {
      id: 3,
      text1: 'Unidades utilitarias activas',
      text2: 'Solicitudes nuevas',
      number: '6',
      icon: calendario,
      className: styles.card3
    }
  ]

  const datatableColumns = [
    { field: 'vehicle', header: 'Vehiculo', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'user', header: 'Usuario', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'taller', header: 'Taller', sortable: false, w: '100px', h: '50px', t: 'center' },
    { field: 'date', header: 'Fecha / hora de entrega', sortable: false, w: '100px', h: '50px', t: 'center' }
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(6)
      setBranchs(data)
    }
    fetchData()
  }, [])

  const nameBodyTemplate = (rowData: any, tableData: any[]) => {
    return (
      <div className={styles.table_column_name}>
        <CustomAvatar
          image={rowData.avatar}
          imageAlt='profile picture'
          imageFallback='/images/icons/IconoFoto.svg'
          shape='circle'
        />
        <div className={styles.textUser}>
          <p className={styles.name}>{rowData.name}</p>
          <p className={styles.text1}>Solicitud: <label>{rowData.solicitud}</label></p>
        </div>
      </div>
    )
  }

  const hourBodyTemplate = (rowData: any) => {
    return (
      <div className={styles.hourColumn}>
        <p style={{ color: '#19a0e3', fontSize: '11px' }}>{rowData.hour}</p>
      </div>
    )
  }

  const datatableColumns2 = [
    { field: 'name', header: '', sortable: false, body: nameBodyTemplate, w: '100px', t: 'center' },
    { field: 'hour', header: '', sortable: false, body: hourBodyTemplate, w: '100px', t: 'center' }
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable2(6)
      setBranchs2(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.containerCards}>
        {cards.map((e) => {
          return (
            <>
              <div className={e.className}>
                <Image src={e.icon} alt='' />
                <div className={styles.text}>
                  <div className={styles.both}>
                    <p className={styles.text1}>{e.text1}</p>
                    <p className={styles.text2}>{e.text2}</p>
                  </div>
                  <p className={styles.number}>{e.number}</p>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <div className={styles.tables}>
        <div className={styles.table1}>
          <p className={styles.title}>Talleres entregas de <label>vehículos</label></p>
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
        <div className={styles.table2}>
          <p className={styles.title}>Registro de recargas de combustible <label>pendientes</label></p>
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
      </div>
    </div>
  )
}