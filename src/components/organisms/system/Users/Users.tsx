import styles from './Users.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import InputText from '@/components/molecules/InputText/InputText'
import buscar from '@/../public/images/icons/buscar.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/users/dataTable'
import DataTableActions from '@/components/molecules/DataTableActions/DataTableActions'
import { useRouter } from 'next/navigation'
import Button from '@/components/molecules/Button/Button/Button'
import CustomAvatar from '@/components/atoms/Avatar/Avatar'
import ModalDelete from '@/components/molecules/ModalDelete/ModalDelete'
import { Image } from 'primereact/image'
import señalcorrecto from '@/../public/images/icons/señalcorrecto.svg'
import { Toast } from 'primereact/toast'
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

export default function Users () {
  const [switchChecked, setSwitchChecked] = useState<boolean>(true);
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => { }
  const statusOptions = [
    { name: 'Todos los estatus', value: 'Todos los estatus' },
    { name: 'En línea', value: 'En línea' },
    { name: 'Sesión caducada', value: 'Sesión caducada' },
    { name: 'Desconectado', value: 'Desconectado'}
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
    { name: 'Motocicleta', value: 'Motocicleta' },
    { name: 'Automóvil', value: 'Automóvil' }
  ]
  const dropdownType = {
    name: 'type',
    label: 'Tipo de vehículo:',
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

  const [search, setSearch] = useState('')
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

  const [modalDelete, setModalDelete] = useState(false)
  const handleModalDelete = () => {
    setModalDelete(true)
  }

  const actionsBodyTemplate = (rowData: any) => {
    return (
      <DataTableActions
        // switchButton={true}
        showButton={true}
        onClickShow={() => router.push('/system/users/id')}
        deleteButton={true}
        onClickDelete={handleModalDelete}
        status={rowData.active}
        // switchChecked={switchChecked}
        recordButton={rowData.user === 'Juan Fernando Pérez del Corral' ? true : false}
      />
    )
  }

  const datatableColumns = [
    { field: 'avatar', header: 'Foto', sortable: false, w: '86px', h: '70px', t: 'center', body: avatarBodyTemplate },
    { field: 'name', header: 'Nombre completo', sortable: false, w: '223px', h: '70px', t: 'center' },
    { field: 'email', header: 'Correo electrónico', sortable: false, w: '200px', h: '70px', t: 'center' },
    { field: 'phone', header: 'Número de celular', sortable: false, w: '136px', h: '70px', t: 'center' },
    { field: 'type', header: 'Tipo de vehículo', sortable: false, w: '135px', h: '70px', t: 'center' },
    { field: 'vehicle', header: 'Vehículo', sortable: false, w: '80px', h: '70px', t: 'center' },
    { field: 'placas', header: 'Placas', sortable: false, w: '75px', h: '70px', t: 'center' },
    { field: 'status', header: 'Estatus de cuenta', sortable: false, w: '136px', h: '70px', t: 'center', body: statusBodyTemplate },
    { field: 'actions', header: '', sortable: true, w: '150px', h: '70px', body: actionsBodyTemplate, t: 'center'}
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])

  const toast = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const handleModalAccept = () => { 
    setModalDelete(false)
    if (toast.current !== null) {
      setVisible(true);
      toast.current.show({
        severity: 'secondary',
        life: 3000,
        content: (props: any) => (
          <div className={styles.dFlex}>
            <Image src={señalcorrecto} alt='' className={styles.imagePading} />
            <div className={styles.pR40pxW200}>
              <div className={styles.toastGreen}>Usuario eliminado</div>
              <div className={styles.toastGray}>Se ha eliminado el usuario correctamente</div>
            </div>
          </div>
        )
      });
    }
  }
  return (
    <>
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <Toast ref={toast} />
      <div className={styles.Users}>
        <div className={styles.header}>
          <p>Lista de <label>Usuario</label></p>
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
                <Button icon='adduser' variant='white'  onClick={() => router.push('/system/users/create')}/>
                <div className={styles.blue}>Crear nuevo</div>
              </div>
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
    {modalDelete && 
      <ModalDelete 
        onHide={() => setModalDelete(false)}
        onHide2={handleModalAccept}
        text1='Se eliminará este usuario de forma permanente, ¿Desea continuar?'
        text2='Se eliminarán los datos y documentos de este usuario.'
        text3='Se eliminará su cuenta en la app movil.'
      />
    }
    </>
  )
}
