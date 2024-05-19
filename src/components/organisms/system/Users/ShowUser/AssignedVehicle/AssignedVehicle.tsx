import React, { useEffect, useState } from 'react'
import styles from './AssignedVehicle.module.scss'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'

import InputText2 from '@/components/molecules/InputText2/InputText2'
import Image from 'next/image'
import vehicle1 from '@/../public/images/vehicle1.jpg'
import vehicle2 from '@/../public/images/vehicle2.jpg'
import vehicle3 from '@/../public/images/vehicle3.jpg'
import vehicle4 from '@/../public/images/vehicle4.jpg'
import Button from '@/components/molecules/Button/Button/Button'
import { RadioButton } from '@/components/molecules/RadioButtonAltern/RadioButton'

export default function AssignedVehicle ({ isEditing }: { isEditing: boolean }) {
  const methods = useForm()
  const onSubmit = () => { }
  const typeVehicleOptions = [
    { name: 'Flotilla', value: 'Flotilla' },
    { name: 'EP', value: 'EP' },
    { name: 'Dolly', value: 'Dolly' }
  ]
  const dropdownTypeVehicle = {
    name: 'typlevehicle',
    label: 'Qué tipo de vehículo es: ',
    placeholder: 'Seleccione el tipo de vehículo',
    options: typeVehicleOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const listType = [
    {
      value: '1',
      label: 'Femenino'
    },
    {
      value: '2',
      label: 'Masculino'
    }
  ]
  const [type1, setType1] = useState('')
  const vehicleOptions = [
    { name: 'Versa 2023', value: 'Versa 2023' },
    { name: 'Melide 2023', value: 'Melide 2023' }
  ]
  const dropdownVehicle = {
    name: 'vehicle',
    label: 'Vehículo',
    placeholder: 'Seleccione vehículo',
    options: vehicleOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const typeUseOptions = [
    { name: 'Versa 2023', value: 'Versa 2023' },
    { name: 'Melide 2023', value: 'Melide 2023' }
  ]
  const dropdownTypeUse = {
    name: 'typeuse',
    label: 'Tipo de uso',
    placeholder: 'Seleccione tipo de uso',
    options: typeUseOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const images = [
    {
      id: 1,
      image: vehicle1
    },
    {
      id: 2,
      image: vehicle2
    },
    {
      id: 3,
      image: vehicle3
    },
    {
      id: 4,
      image: vehicle4
    }
  ]
  const [selectedOption, setSelectedOption] = useState<string>()
  useEffect(() => {
    methods.setValue('gender', 'female')
  }, [])
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.AssignedVehicle}>
          <div className={styles.right}>
            <p className={styles.title}>Asignación de vehículo</p>
            <div className={styles.information}>
              <div style={{ width: '235px' }}>
                <Dropdown {...dropdownTypeVehicle} />
              </div>
              <p className={styles.textVehicle}>El vehículo es de la empresa o es propio:</p>
              <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                <RadioButton
                  name='vehicle'
                  inputId='company'
                  value='company'
                  defaultValue='company' 
                  setValue={setSelectedOption}
                  label='Empresa'
                  readOnly={!isEditing}
                  rules={{ required: true }} 
                  variant='primary'
                />
                <RadioButton
                  name='vehicle'
                  inputId='self'
                  value='self'
                  defaultValue='company'
                  readOnly={!isEditing}
                  setValue={setSelectedOption}
                  label='Propio'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
              <div style={{ width: '273px', marginTop: '30px' }}>
                <Dropdown {...dropdownVehicle} />
              </div>
              <div className={styles.licensePlates}>
                <div style={{ width: '221px' }}>
                  <InputText2
                    name='plates'
                    type='text'
                    label='Placas'
                    placeholder='Ingrese placas'
                    variant='primary'
                    value='AJK-24154'
                    readOnly={!isEditing}
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '273px' }}>
                  <Dropdown {...dropdownTypeUse} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.header}>
              <p className={styles.titleVehicle}>Versa 2023</p>
              <div className={styles.button}>
                <Button height='35px'>Ver vehículo</Button>
              </div>
            </div>
            <div className={styles.contImages}>
              {images.map((e, key) => {
                return (
                  <div className={styles.image} key={key}>
                    <Image src={e.image} alt='' />
                    <div className={styles.backWhite} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
