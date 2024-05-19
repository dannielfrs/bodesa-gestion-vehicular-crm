import React, { useEffect, useState } from 'react'
import styles from './CreateUser.module.scss'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import InputText2 from '@/components/molecules/InputText2/InputText2'

import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import FileUpload from '@/components/molecules/FileUpload/FileUpload'
import Button from '@/components/molecules/Button/Button/Button'
import { RadioButton } from '@/components/molecules/RadioButtonAltern/RadioButton'

export default function CreateUser () {
  const methods = useForm()
  const onSubmit = () => { }
  const showOptions = [
    { name: 'Supervisor de cobranza externa', value: 'Supervisor de cobranza externa' },
    { name: 'Gerente de presentación visual y planeación', value: 'Gerente de presentación visual y planeación' },
    { name: 'Gerente de control interno A', value: 'Gerente de control interno A' }
  ]
  const dropdownShow = {
    name: 'show',
    label: 'Puesto',
    placeholder: 'Seleccione el puesto del usuario',
    options: showOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const costOptions = [
    { name: 'Centro 1', value: 'Centro 1' },
    { name: 'Centro 2', value: 'Centro 2' },
    { name: 'Centro 3', value: 'Centro 3' }
  ]
  const dropdownCost = {
    name: 'cost',
    label: 'Centro de costos',
    placeholder: 'Seleccione centro de Costos',
    options: costOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const addressOptions = [
    { name: 'Dirección 1', value: 'Dirección 1' },
    { name: 'Dirección 2', value: 'Dirección 2' },
    { name: 'Dirección 3', value: 'Dirección 3' }
  ]
  const dropdownAddress = {
    name: 'cost',
    label: 'Dirección',
    placeholder: 'Seleccione dirección',
    options: addressOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const payrollOptions = [
    { name: 'Dirección 1', value: 'Dirección 1' },
    { name: 'Dirección 2', value: 'Dirección 2' },
    { name: 'Dirección 3', value: 'Dirección 3' }
  ]
  const dropdownPayroll = {
    name: 'payrolldrop',
    label: 'Nómina',
    placeholder: 'Seleccione nómina',
    options: payrollOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const vehicleOptions = [
    { name: 'Flotilla', value: 'Flotilla' },
    { name: 'EP', value: 'EP' },
    { name: 'Dolly', value: 'Dolly' }
  ]
  const dropdownVehicle = {
    name: 'vehicle',
    label: 'Qué tipo de vehículo es:',
    placeholder: 'Seleccione tipo de vehículo',
    options: vehicleOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    onChange: (e:any) => handleVehicleChange(e.value),
    panelClassName: styles.primary
  }

  const listTypeV = [
    {
      value: '1',
      label: 'Empresa'
    },
    {
      value: '2',
      label: 'Propio'
    }
  ]
  const [typeVehicle, setTypeVehicle] = useState('')
  const [vehicleSelected, setVehicleSelected] = useState(false)

  const handleVehicleChange = (value: any) => {
    setTypeVehicle(value)
    setVehicleSelected(true)
  }

  const vehicleOptions2 = [
    { name: 'Vehículo versa 2023', value: 'Vehículo versa 2023' },
    { name: 'Vehículo toyota 2023', value: 'Vehículo toyota 2023' },
    { name: 'Vehículo toyota 2022', value: 'Vehículo toyota 2022' }
  ]
  const dropdownVehicle2 = {
    name: 'vehicle2',
    label: 'Vehículo',
    placeholder: 'Seleccione un vehículo',
    options: vehicleOptions2,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    disabled: !vehicleSelected,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const [selectedOption, setSelectedOption] = useState<string>()
  useEffect(() => {
    methods.setValue('gender', 'female')
  }, [])
  useEffect(() => {
    methods.setValue('vehicle', 'company')
  }, [])


  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.CreateUser}>
        <p className={styles.title}>Registro de nuevo <label>Usuario</label></p>
        <div className={styles.container}>
          <div className={styles.photo}>
            <ImageUpload name='photoUser' height='160px' showHandlePhoto={false} label='' title='Subir foto' />
          </div>
          <div className={styles.right}>
            <p className={styles.title}>Datos generales</p>
            <div className={styles.form}>
              <div className={styles.inputs}>
                <div style={{ width: '334px' }}>
                  <InputText2
                    name='name'
                    type='text'
                    label='Nombre completo'
                    placeholder='Ingrese nombre del usuario'
                    variant='primary'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '232px' }}>
                  <InputText2
                    name='date'
                    type='date'
                    label='Fecha de nacimiento'
                    placeholder=''
                    variant='primary'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '127px' }}>
                  <InputText2
                    name='age'
                    type='text'
                    label='Edad'
                    placeholder='Edad'
                    variant='primary'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <RadioButton
                  name='gender'
                  inputId='female'
                  value='female'
                  defaultValue='female' 
                  setValue={setSelectedOption}
                  label='Femenino'
                  rules={{ required: true }} 
                  variant='primary'
                />
                <RadioButton
                  name='gender'
                  inputId='male'
                  value='male'
                  defaultValue='female'
                  setValue={setSelectedOption}
                  label='Masculino'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
              <div className={styles.inputs2}>
                <div style={{ width: '334px' }}>
                  <InputText2
                    name='email'
                    type='text'
                    label='Correo electrónico'
                    placeholder='Ingrese correo electrónico'
                    variant='primary'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div className={styles.numberphone}>
                  <p>Número de celular</p>
                  <div className={styles.phone}>
                    <div style={{ width: '59px' }}>
                      <InputText2
                        name='number'
                        type='text'
                        label=''
                        placeholder='+00'
                        variant='primary'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                    <div style={{ width: '205px' }}>
                      <InputText2
                        name='number2'
                        type='text'
                        label=''
                        placeholder='00 00 00 00'
                        variant='primary'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ width: '331px' }}>
                  <Dropdown {...dropdownShow} />
                </div>
              </div>
              <div className={styles.address}>
                <p className={styles.title}>Domicilio</p>
                <div className={styles.inputs3}>
                  <div style={{ width: '303px' }}>
                    <InputText2
                      name='address1'
                      type='text'
                      label='Calle'
                      placeholder='Ingrese calle'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '100px' }}>
                    <InputText2
                      name='no'
                      type='text'
                      label='No.'
                      placeholder='#0000'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '258px' }}>
                    <InputText2
                      name='colonia'
                      type='text'
                      label='Colonia'
                      placeholder='Ingrese colonia'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                </div>
                <div className={styles.inputs4}>
                  <div style={{ width: '266px' }}>
                    <InputText2
                      name='municipality'
                      type='text'
                      label='Municipio'
                      placeholder='Ingrese municipio'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '268px' }}>
                    <InputText2
                      name='state'
                      type='text'
                      label='Estado'
                      placeholder='Ingrese Estado'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.license}>
                <p className={styles.title}>Licencia de conducir</p>
                <div className={styles.containerLicense}>
                  <div className={styles.photoLicense}>
                    <ImageUpload name='license' height='197px' showHandlePhoto={false} label='' title='Subir foto' />
                  </div>
                  <div className={styles.date}>
                    <div style={{ width: '232px' }}>
                      <InputText2
                        name='date3'
                        type='date'
                        label='Fecha de expedición:'
                        placeholder=''
                        variant='primary'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                    <div style={{ width: '232px' }}>
                      <InputText2
                        name='date4'
                        type='date'
                        label='Fecha de vencimiento:'
                        placeholder=''
                        variant='primary'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.CardToka}>
                <p className={styles.title}>Tarjeta toka</p>
                <div className={styles.inputs5}>
                  <div style={{ width: '330px' }}>
                    <InputText2
                      name='noCard'
                      type='text'
                      label='Numero de tarjeta'
                      placeholder='Ingrese numero de tarjeta'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '218px' }}>
                    <InputText2
                      name='balance'
                      type='text'
                      label='Saldo'
                      placeholder='Ingrese saldo inicial'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '232px' }}>
                    <InputText2
                      name='date'
                      type='date'
                      label='Fecha de vencimiento'
                      placeholder=''
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                </div>
                <div className={styles.inputs6}>
                  <div style={{ width: '330px' }}>
                    <InputText2
                      name='payroll'
                      type='text'
                      label='Número de nómina'
                      placeholder='Ingrese numero de tarjeta'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '331px' }}>
                    <Dropdown {...dropdownCost} />
                  </div>
                  <div style={{ width: '331px' }}>
                    <Dropdown {...dropdownAddress} />
                  </div>
                </div>
                <div className={styles.inputs6}>
                  <div style={{ width: '331px' }}>
                    <Dropdown {...dropdownPayroll} />
                  </div>
                  <div style={{ width: '146px' }}>
                    <InputText2
                      name='nip'
                      type='text'
                      label='NIP'
                      placeholder='Ingrese NIP'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.vehicleassignment}>
                <p className={styles.title}>Asignación de vehículo</p>
                <div style={{ width: '235px' }}>
                  <Dropdown {...dropdownVehicle} />
                </div>
                <div className={styles.vehicle}>
                  <p className={styles.titleV}>El vehículo es de la empresa o es propio:</p>
                  <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
                    <RadioButton
                      name='vehicle'
                      inputId='company'
                      value='company'
                      defaultValue='company' 
                      setValue={setSelectedOption}
                      label='Empresa'
                      rules={{ required: true }} 
                      variant='primary'
                      disabled={!vehicleSelected}
                    />
                    <RadioButton
                      name='vehicle'
                      inputId='self'
                      value='self'
                      disabled={!vehicleSelected}
                      defaultValue='company'
                      setValue={setSelectedOption}
                      label='Propio'
                      rules={{ required: true }}
                      variant='primary'
                    />
                  </div>
                </div>
                <div className={styles.inputs6}>
                  <div style={{ width: '235px' }}>
                    <Dropdown {...dropdownVehicle2} />
                  </div>
                  <div style={{ width: '218px' }}>
                    <InputText2
                      name='licensePlates'
                      type='text'
                      label='Placas'
                      disabled={!vehicleSelected}
                      placeholder='Placas del vehículo'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                  <div style={{ width: '273px' }}>
                    <InputText2
                      name='typeUse'
                      type='text'
                      label='Tipo de uso'
                      disabled={!vehicleSelected}
                      placeholder='Uso del vehículo'
                      variant='primary'
                      height='35px'
                      rules={{ required: false }}
                    />
                  </div>
                </div>
                <div className={styles.photosVehicle}>
                  <div className={styles.photo1}>
                    <ImageUpload name='photo1' disabled={!vehicleSelected} height='176px' showHandlePhoto={false} label='' title='' />
                  </div>
                  <div className={styles.photo1}>
                    <ImageUpload name='photo2' disabled={!vehicleSelected} height='176px' showHandlePhoto={false} label='' title='' />
                  </div>
                  <div className={styles.photo1}>
                    <ImageUpload name='photo3' disabled={!vehicleSelected} height='176px' showHandlePhoto={false} label='' title='' />
                  </div>
                  <div className={styles.photo1}>
                    <ImageUpload name='photo4' disabled={!vehicleSelected} height='176px' showHandlePhoto={false} label='' title='' />
                  </div>
                </div>
                <div className={styles.vehicleRegistration}>
                  <ImageUpload name='photo5' disabled={!vehicleSelected} height='197px' showHandlePhoto={false} label='Tarjeta de circulación' title='' />
                </div>
                <div className={styles.fileupload}>
                  <label style={{ fontSize: '12px', color: '#455362', fontWeight: '500', marginLeft: '15px' }}>Reglamento firmado por el usuario</label>
                  <FileUpload name='document' disabled={!vehicleSelected} variant='secondary' required={false} />
                </div>
                <div className={styles.buttons}>
                  <div style={{ width: '281px' }}>
                    <Button disabled={!vehicleSelected} variant='secondary'>Cancelar</Button>
                  </div>
                  <div style={{ width: '281px' }}>
                    <Button disabled={!vehicleSelected} variant='primary'>Guardar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
