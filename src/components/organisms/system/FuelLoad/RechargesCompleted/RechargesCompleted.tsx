import { useContext, useEffect, useRef, useState } from 'react'
import styles from './RechargesCompleted.module.scss'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import buscar from '@/../public/images/icons/buscar.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import DataTable from '@/components/molecules/DataTable/DataTable'
// import dataTable from '@/services/fake/FuelLoad/dataTable'
import DataTableActions from '@/components/molecules/DataTableActions/DataTableActions'
import { useRouter } from 'next/navigation'
import { Galleria } from 'primereact/galleria'
import { downloadExcelService } from '@/services/axios/general/general'
import { FuelLoadCompletedContext } from '@/context/authenticated/fuelLoadCompleted/FuelLoadCompletedContext'

export default function RechargesCompleted() {

  const { loading, data, documents, getDocumentsService, getGroupDocumentsService } = useContext(FuelLoadCompletedContext)
  const methods = useForm()
  const router = useRouter()
  const galleria: any = useRef(null)
  const [tableData, settableData] = useState<any[]>([])
  const [search, setSearch] = useState('')

  // console.log('documents', documents)

  useEffect(() => {
    settableData(data)
  }, [data])

  const onSubmit = () => { }

  const showOptions = [
    { label: 'Todos los registros', value: 0 },
    { label: 'Solo registros de usuarios', value: 1 },
    { label: 'Solo registros de grupos', value: 2 }
  ]

  const handleFilter = (value: any) => {
    switch (value) {
      case 0:
        settableData(data)
        break
      case 1:
        const result = data.filter((item: any) => item.actions.excel === false)
        settableData(result)
        break
      case 2:
        const result2 = data.filter((item: any) => item.actions.excel === true)
        settableData(result2)
        break
      default:
        break
    }
  }

  const handleShowImages = async (rowData: any) => {
    if (rowData.actions.excel) await getGroupDocumentsService(rowData.uuid, 'photos')
    else await getDocumentsService(rowData.uuid, 'photos')
    galleria.current.show()
  }

  const handleShowTicket = async (rowData: any) => {
    if (rowData.actions.excel) await getGroupDocumentsService(rowData.uuid, 'ticket')
    else await getDocumentsService(rowData.uuid, 'ticket')
    galleria.current.show()
  }

  const actionsBodyTemplate = (rowData: any) => {
    return (
      <DataTableActions
        photoButton={rowData.actions.image}
        ticketButton={rowData.actions.ticket}
        recordButton={rowData.actions.history}
        excelButton={rowData.actions.excel}
        onClickPhoto={() => handleShowImages(rowData)}
        onClickTicket={() => handleShowTicket(rowData)}
        onClickRecord={() => router.push(`/system/fuel-load/history/${rowData.uuid}`)}
        onClickExcel={() => downloadExcelService(`/crm/fuel-load/generate-excel/${rowData.uuid}`, 'datos')}
      />
    )
  }

  const datatableColumns = [
    { id: 1, field: 'invoice', header: 'Folio', sortable: false, w: '100px', t: 'center' },
    { id: 2, field: 'name', header: 'Usuario', sortable: false, w: '100px', t: 'center' },
    { id: 3, field: 'date', header: 'Fecha / hora de entrega', sortable: false, w: '100px', t: 'center' },
    { id: 4, field: 'time', header: 'Tiempo', sortable: false, w: '100px', t: 'center' },
    { id: 5, field: 'cardToka', header: 'Tarjeta toka', sortable: false, w: '100px', t: 'center' },
    { id: 6, field: 'numberPayroll', header: 'No. nomina', sortable: false, w: '100px', t: 'center' },
    { id: 7, field: 'fullLoad', header: 'Total de la carga', sortable: false, w: '100px', t: 'center' },
    { id: 8, field: 'actions', header: 'Acciones', sortable: false, w: '150px', body: actionsBodyTemplate, t: 'center' }
  ]

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await dataTable(100)
  //     setBranchs(data)
  //   }
  //   fetchData()
  // }, [])

  const itemTemplate = (item: any) => {
    return (
      <Image
        src={item?.imageUrl}
        alt='image'
        loader={({ src }) => src}
        unoptimized
        width={10}
        height={10}
        style={{ width: '100%', height: '50%' }}
      />
    )
  }

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.RechargesCompleted}>
          <div className={styles.inputs}>
            <div className={styles.right}>
              <div style={{ width: '250px' }}>
                <InputText
                  name='email'
                  label=''
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Buscar'
                  variant='search'
                  icon={buscar}
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <div>Ver:</div>
              <div style={{ width: '270px' }}>
                <Dropdown
                  name='show'
                  label=''
                  defaultValue={0}
                  onChange={(e) => handleFilter(e.value)}
                  placeholder='-Selecciona una opción-'
                  options={showOptions}
                  optionLabel='label'
                  variant='primary'
                  height='35px'
                />
              </div>
            </div>
            <div className={styles.dates}>
              <p>Busca por fechas:</p>
              <div style={{ width: '160px' }}>
                <InputText
                  name='date1'
                  type='date'
                  label=''
                  placeholder=''
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
              </div>
              <p className={styles.guion}>-</p>
              <div style={{ width: '160px' }}>
                <InputText
                  name='date2'
                  type='date'
                  label=''
                  placeholder=''
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
              </div>
            </div>
          </div>
          <DataTable
            columns={datatableColumns}
            data={tableData}
            loading={loading}
            selectionMode='single'
            variant='secondary'
            search={search}
            paginatorNone
            noSort
          />
        </div>
        <Galleria
          ref={galleria}
          value={documents}
          numVisible={3}
          item={itemTemplate}
          circular
          fullScreen
          showItemNavigators={documents.length > 1}
          style={{ maxWidth: '50%' }}
        />
      </FormHookProvider>
    </>
  )
}
