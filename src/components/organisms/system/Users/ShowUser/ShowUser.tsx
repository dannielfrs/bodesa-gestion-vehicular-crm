import React, { useRef, useState } from 'react'
import styles from './ShowUser.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import IconBack from '@/../public/images/icons/IconBack.svg'
import user from '@/../public/images/user.jpg'
import IconHistorial from '@/../public/images/icons/IconHistorial.svg'
import IconDelete from '@/../public/images/icons/deleteWhite.svg'
import Button from '@/components/molecules/Button/Button/Button'
import { TabPanel, TabView } from 'primereact/tabview'
import UserData from './UserData/UserData'
import CardToka from './CardToka/CardToka'
import AssignedVehicle from './AssignedVehicle/AssignedVehicle'
import IconEdit from '@/../public/images/icons/IconEdit.svg'
import ModalDelete from '@/components/molecules/ModalDelete/ModalDelete'

export default function ShowUser () {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = [
    { id: 0, label: 'Datos de usuarios' },
    { id: 1, label: 'Tarjeta toka' },
    { id: 2, label: 'Vehículo asignado' }
  ]
  const [isEditing, setIsEditing] = useState(false)
  const handleEditClick = (index: number) => {
    setIsEditing(true)
    setActiveTabIndex(index)
  }

  const [deleteUser, setDeleteUser] = useState(false) 
  const handleModalAccept = () => { 
    setDeleteUser(false)
    router.push('/system/users/id/delete-user')
    setTimeout(() => {
      router.push('/system/users')
    }, 4000); 
  }
  return (
    <>
      <div className={styles.ShowUser}>
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
          <div className={styles.right}>
            <div className={styles.buttonRecord} onClick={() => router.push('/system/users/id/history')}>
              <Image src={IconHistorial} alt='' />
            </div>
            <div className={styles.buttonDelete} onClick={() => setDeleteUser(true)}>
              <Image src={IconDelete} alt='' />
            </div>
          </div>
        </div>
        <div className={styles.tabsRequest}>
          {!isEditing && (
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
              <div className={styles.buttonEdit} onClick={() => handleEditClick(activeIndex)}>
                <Image src={IconEdit} alt='' />
              </div>
            </div>
          )}
          {isEditing && (
            <div className={styles.editMode}>
              <p className={styles.editTitle}>Editar
                <label>
                  {activeTabIndex === 0 && 'Datos de usuario'}
                  {activeTabIndex === 1 && 'Datos de tarjeta Toka'}
                  {activeTabIndex === 2 && 'Datos de vehículo asignado'}

                </label>
              </p>
              <div className={styles.buttons}>
                <div style={{width: '159px'}}>
                  <Button variant="secondary" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </div>
                <div style={{width: '159px'}}>
                  <Button variant="primary" onClick={() => setIsEditing(false)}>
                    Guardar
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className={styles.container}>
            <TabView
              className={styles.tabView}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel className={styles.TabPanel}>
                <UserData isEditing={isEditing} />
              </TabPanel>
              <TabPanel className={styles.TabPanel}>
                <CardToka isEditing={isEditing} />
              </TabPanel>
              <TabPanel className={styles.TabPanel}>
                <AssignedVehicle isEditing={isEditing} />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
      {deleteUser && 
        <ModalDelete 
          onHide={() => setDeleteUser(false)}
          onHide2={handleModalAccept}
          text1='Se eliminará este usuario de forma permanente, ¿Desea continuar?'
          text2='Se eliminarán los datos y documentos de este usuario.'
          text3='Se eliminará su cuenta en la app movil.'
        />
      }
    </>
  )
}
