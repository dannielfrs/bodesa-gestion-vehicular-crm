import React, { useEffect, useState } from 'react'
import styles from './Administrators.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'
import buscar from '@/../public/images/icons/buscar.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/settings/administrators/dataTable'
import DataTableActions from '@/components/molecules/DataTableActions/DataTableActions'
import CustomAvatar from '@/components/atoms/Avatar/Avatar'
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch'

interface Branch {
  vehicle?: string
  taller?: string
  date?: string
  user?: string 
  name?: string
  hour?: string
  avatar?: string
}

export default function Administrators () {
  const router = useRouter()
  const methods = useForm()
  const onSubmit = () => { }
  const [search, setSearch] = useState('')
  const statusOptions = [
    { name: 'Todos los estatus', value: 'Todos los estatus' },
    { name: 'Activa', value: 'Activa' },
    { name: 'Desactivada', value: 'Desactivada' }
  ]
  const dropdownStatus = {
    name: 'status',
    label: 'Estatus de cuenta:',
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

  const TypeOptions = [
    { name: 'Todos los vehículos', value: 'Todos los vehículos' },
    { name: 'Registro de recargas', value: 'Registro de recargas' },
    { name: 'Mantenimiento', value: 'Mantenimiento' },
    { name: 'Registro', value: 'Registro' }
  ]
  const dropdownType = {
    name: 'type',
    label: 'Tipo de cuenta:',
    placeholder: '-Selecciona una opción-',
    options: TypeOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'primary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const [branchs, setBranchs] = useState<Branch[]>([])

  const avatarBodyTemplate = (rowData: any, tableData: any[]) => {
    return (
      <div className={styles.table_column_name}>
        <CustomAvatar
          image={rowData.avatar}
          imageAlt='profile picture'
          imageFallback='/images/icons/IconoFoto.svg'
          shape='circle'
        />
      </div>
    )
  }

  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({})

  const handleSwitchChange = (rowData: any, newValue: boolean) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [rowData.name]: newValue 
    }))
  }

  const statusBodyTemplate = (rowData: any) => {
    return (
      <div className={styles.statusAccount}>
        <p className={ switchStates[rowData.name] ? styles.statusBlue : styles.statusRed}>{switchStates[rowData.name] ? 'En línea' : 'Sesión caducada'}</p>
        <div>
          <Button variant='button_action' tooltipOptions={{position: 'top'}}>
            <div className={`${styles.inputswitch + " switch"}`}>
              <InputSwitch
                checked={switchStates[rowData.name] || false}
                onChange={(e: InputSwitchChangeEvent) => handleSwitchChange(rowData, e.value)}
              />
            </div>
          </Button>
        </div>
      </div>
    )
  }
  const actionsBodyTemplate = (rowData: any) => {
    return (
      <DataTableActions
        // switchButton={true}
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
    { field: 'avatar', header: 'Foto', sortable: false, w: '86px', h: '70px', t: 'center', body: avatarBodyTemplate },
    { field: 'user', header: 'Usuario', sortable: false, w: '223px', h: '70px', t: 'center' },
    { field: 'name', header: 'Nombre del responsable', sortable: false, w: '223px', h: '70px', t: 'center' },
    { field: 'email', header: 'Correo electrónico', sortable: false, w: '200px', h: '70px', t: 'center' },
    { field: 'type', header: 'Tipo de cuenta', sortable: false, w: '170px', h: '70px', t: 'center' },
    { field: 'status', header: 'Estatus de cuenta', sortable: false, w: '136px', h: '70px', t: 'center', body: statusBodyTemplate },
    { field: 'actions', header: 'Acciones', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.Administrators}>
          <div className={styles.topHeader}>
            <div onClick={() => router.push('/system/settings')} style={{ cursor: 'pointer' }}>
              <Image src={IconBack} alt='' />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>Lista de <label>Administradores</label></p>
              <p className={styles.subtitle}>Gestiona los usuarios del sistema</p>
            </div>
          </div>
          <div className={styles.inputs}>
            <div style={{ width: '248px' }}>
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
              <div style={{ width: '314px' }}>
                <Dropdown {...dropdownStatus} />
              </div>
              <div style={{ width: '300px' }}>
                <Dropdown {...dropdownType} />
              </div>
            </div>
            <div className={styles.addUser}>
              <Button icon='adduser' variant='white' onClick={() => router.push('/system/settings/administrators/create')} />
              <div className={styles.blue}>Crear nuevo</div>
            </div>
          </div>
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
        </div>
      </FormHookProvider>
    </>
  )
}
