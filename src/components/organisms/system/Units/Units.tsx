import React, { useEffect, useState } from 'react'
import styles from './Units.module.scss'
import InputText from '@/components/molecules/InputText/InputText'
import Button from '@/components/molecules/Button/Button/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import buscar from '@/../public/images/icons/buscar.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { TabPanel, TabView } from 'primereact/tabview'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/units/dataTable'
import DataTableActions from '@/components/molecules/DataTableActions/DataTableActions'
import dataTable2 from '@/services/fake/units/dataTable2'

interface Branch {
  vehicle?: string
  taller?: string
  date?: string
  user?: string
  name?: string
  hour?: string
  avatar?: string
}

export default function Units () {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => { }
  const [search, setSearch] = useState('')
  const statusOptions = [
    { name: 'Todos', value: 'Todos' },
    { name: 'Asignado', value: 'Asignado' },
    { name: 'Disponible', value: 'Disponible' }
  ]
  const dropdownStatus = {
    name: 'status',
    label: 'Estatus:',
    placeholder: '-Selecciona una opción-',
    options: statusOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'primary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const [activeIndex, setActiveIndex] = useState(0)
  const tabs = [
    { id: 0, label: 'Vehículos asignados' },
    { id: 1, label: 'Vehículos pool' }
  ]
  
  const [branchs, setBranchs] = useState<Branch[]>([])
  const responsibleBodyTemplate = (rowData: any) => {
    return (
      <p className={styles.nameResponsible}>{rowData.responsible}</p>
    )
  }

  const statusBodyTemplate = (rowData: any) => {
    return (
      <p className={rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? styles.statusBlue : styles.statusGray}>{rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? 'Asignado' : 'Disponible'}</p>
    )
  }

  const actionsBodyTemplate = (rowData: any) => {
    return (
      <DataTableActions
        showButton={true}
        onClickShow={() => router.push('/system/users/id')}
        deleteButton={true}
        // onClickDelete={handleModalDelete}
        status={rowData.active}
        // switchChecked={switchChecked}
        recordButton={rowData.user === 'Juan Fernando Pérez del Corral' ? true : false}
      />
    )
  }

  const datatableColumns = [
    { field: 'type', header: 'Tipo', sortable: false, w: '64px', h: '70px', t: 'center' },
    { field: 'name', header: 'Nombre completo', sortable: false, w: '88px', h: '70px', t: 'center' },
    { field: 'model', header: 'Modelo', sortable: false, w: '58px', h: '70px', t: 'center' },
    { field: 'plates', header: 'Placas', sortable: false, w: '78px', h: '70px', t: 'center' },
    { field: 'number', header: 'Numero de serie', sortable: false, w: '146px', h: '70px', t: 'center' },
    { field: 'direction', header: 'Dirección', sortable: false, w: '179px', h: '70px', t: 'center' },
    { field: 'department', header: 'Departamento', sortable: false, w: '150px', h: '70px', t: 'center' },
    { field: 'responsible', header: 'Responsable', sortable: false, w: '182px', h: '70px', t: 'center', body: responsibleBodyTemplate },
    { field: 'use', header: 'Uso', sortable: false, w: '72px', h: '70px', t: 'center' },
    { field: 'status', header: 'Estatus', sortable: false, w: '70px', h: '70px', t: 'center', body: statusBodyTemplate },
    { field: 'actions', header: '', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])

  const [branchs2, setBranchs2] = useState<Branch[]>([])
  const responsibleBodyTemplate2 = (rowData: any) => {
    return (
      <p className={styles.nameResponsible}>{rowData.responsible}</p>
    )
  }

  const statusBodyTemplate2 = (rowData: any) => {
    return (
      <div className={styles.statusPool}>
        <div className={styles.status}>
          <div className={ rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? styles.CircleBlue : ''}/>
          <p className={rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? styles.statusBlue : styles.statusGray}>{rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? 'En uso' : 'Disponible'}</p>
        </div>
        <p className={styles.showTrip}>{rowData.responsible == 'Martha Ofelia Mejia Cibrian' ? 'Ver viaje' : '' }</p>
      </div>
    )
  }

  const actionsBodyTemplate2 = (rowData: any) => {
    return (
      <DataTableActions
        showButton={true}
        onClickShow={() => router.push('/system/users/id')}
        deleteButton={true}
        // onClickDelete={handleModalDelete}
        status={rowData.active}
        // switchChecked={switchChecked}
        recordButton={rowData.user === 'Juan Fernando Pérez del Corral' ? true : false}
      />
    )
  }

  const datatableColumns2 = [
    { field: 'type', header: 'Tipo', sortable: false, w: '64px', h: '70px', t: 'center' },
    { field: 'name', header: 'Nombre completo', sortable: false, w: '88px', h: '70px', t: 'center' },
    { field: 'model', header: 'Modelo', sortable: false, w: '58px', h: '70px', t: 'center' },
    { field: 'plates', header: 'Placas', sortable: false, w: '78px', h: '70px', t: 'center' },
    { field: 'number', header: 'Numero de serie', sortable: false, w: '146px', h: '70px', t: 'center' },
    { field: 'direction', header: 'Dirección', sortable: false, w: '179px', h: '70px', t: 'center' },
    { field: 'use', header: 'Uso', sortable: false, w: '72px', h: '70px', t: 'center' },
    { field: 'responsible', header: 'Responsable', sortable: false, w: '182px', h: '70px', t: 'center', body: responsibleBodyTemplate2 },
    { field: 'status', header: 'Estatus', sortable: false, w: '150px', h: '70px', t: 'center', body: statusBodyTemplate2 },
    { field: 'actions', header: '', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate2, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable2(100)
      setBranchs2(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.Units}>
          <div className={styles.topUnits}>
            <p className={styles.title}>Unidades <label>(Autos y motocicletas)</label></p>
            <div className={styles.contUnits}>
              <Button icon='adduser' variant='white' onClick={() => router.push('/system/units/create')}/>
              <div className={styles.black}>Crear nuevo</div>
            </div>
          </div>
          <div className={styles.inputs}>
            <div style={{ width: '421px' }}>
              <InputText
                name='search'
                label=''
                placeholder='Buscar'
                variant='search'
                icon={buscar}
                height='35px'
                rules={{ required: true }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={styles.center}>
              <div style={{ width: '215px' }}>
                <Dropdown {...dropdownStatus} />
              </div>
              <div className={styles.tabsRequest}>
                <div className={styles.contTabs}>
                  {tabs.map((e) => {
                    return (
                      <div key={e.id} className={styles.cont_tabs}>
                        <div style={{ width: '146px' }}>
                          <Button
                            type='button'
                            onClick={() => setActiveIndex(e.id)}
                            className={`${activeIndex === e.id && styles.active}`}
                            variant={activeIndex === e.id ? 'primary' : 'secondary'}
                            height='35px'
                          >
                            {e.label}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <TabView
              className={styles.tabView}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel className={styles.TabPanel}>
                <DataTable
                  columns={datatableColumns}
                  data={branchs}
                  loading={false}
                  selectionMode='single'
                  variant='secondary'
                  search={search}
                  paginatorNone
                  noSort
                />
              </TabPanel>
              <TabPanel className={styles.TabPanel}>
                <DataTable
                  columns={datatableColumns2}
                  data={branchs2}
                  loading={false}
                  selectionMode='single'
                  variant='secondary'
                  search={search}
                  paginatorNone
                  noSort
                />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
