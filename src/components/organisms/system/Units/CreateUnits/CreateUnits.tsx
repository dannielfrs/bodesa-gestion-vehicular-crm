import React, { useState } from 'react'
import styles from './CreateUnits.module.scss'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import Image from 'next/image'
import IconInfo from '@/../public/images/icons/IconInfo.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import FileUpload from '@/components/molecules/FileUpload/FileUpload'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import porciento from '@/../public/images/icons/porciento.svg'
import Button from '@/components/molecules/Button/Button/Button'
import VehicleCategory from './VehicleCategory/VehicleCategory'

export default function CreateUnits () {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => { }
  const [showVehicleCategory, setShowVehicleCategory] = useState(true)
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const TypeOptions = [
    { name: 'Seleccione tipo de vehículo', value: 'Seleccione tipo de vehículo' },
    { name: 'Flotilla', value: 'Flotilla' },
    { name: 'EP', value: 'EP' },
    { name: 'Dolly', value: 'Dolly' }
  ]
  const dropdownType = {
    name: 'type',
    label: 'Tipo de vehículo',
    placeholder: 'Seleccione tipo de vehículo',
    options: TypeOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  const BrandOptions = [
    { name: 'Seleccione marca de vehículo', value: 'Seleccione marca de vehículo' },
    { name: 'Nissan', value: 'Nissan' },
    { name: 'Jay Feather', value: 'Jay Feather' },
    { name: 'Kenworth', value: 'Kenworth' },
    { name: 'Reno', value: 'Reno' },
    { name: 'Mercedes Benz', value: 'Mercedes Benz' },
    { name: 'Freightliner', value: 'Freightliner' }
  ]
  const dropdownBrand = {
    name: 'brand',
    label: 'Marca',
    placeholder: 'Seleccione marca de vehículo',
    options: BrandOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const LineOptions = [
    { name: 'Seleccione línea', value: 'Seleccione línea' },
    { name: 'NP300', value: 'NP300' },
    { name: 'March', value: 'March' },
    { name: 'Hilux', value: 'Hilux' }
  ]
  const dropdownLine = {
    name: 'line',
    label: 'Línea',
    placeholder: 'Seleccione línea',
    options: LineOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const UseOptions = [
    { name: 'Seleccione uso del vehículo', value: 'Seleccione uso del vehículo' },
    { name: 'Utilitario', value: 'Utilitario' },
    { name: 'Personal', value: 'Personal' }
  ]
  const dropdownUse = {
    name: 'use',
    label: 'Uso del vehículo',
    placeholder: 'Seleccione uso del vehículo',
    options: UseOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const CenterOptions = [
    { name: 'Seleccione centro de Costos', value: 'Seleccione centro de Costos' },
    { name: 'centro 1', value: 'centro 1' },
    { name: 'centro 2', value: 'centro 2' }
  ]
  const dropdownCenter = {
    name: 'center',
    label: 'Centro de Costos',
    placeholder: 'Seleccione centro de Costos',
    options: CenterOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const KeyOptions = [
    { name: 'Seleccione clave', value: 'Seleccione clave' },
    { name: 'Clave 1', value: 'Clave 1' },
    { name: 'Clave 2', value: 'Clave 2' }
  ]
  const dropdownKey = {
    name: 'key',
    label: 'Clave para presupuestos',
    placeholder: 'Seleccione clave',
    options: KeyOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const AddressOptions = [
    { name: 'Seleccione dirección', value: 'Seleccione dirección' },
    { name: 'Clave 1', value: 'Clave 1' },
    { name: 'Clave 2', value: 'Clave 2' }
  ]
  const dropdownAddress = {
    name: 'address',
    label: 'Dirección',
    placeholder: 'Seleccione dirección',
    options: AddressOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const PayrollOptions = [
    { name: 'Seleccione Nómina', value: 'Seleccione Nómina' },
    { name: 'Clave 1', value: 'Clave 1' },
    { name: 'Clave 2', value: 'Clave 2' }
  ]
  const dropdownPayroll = {
    name: 'payroll',
    label: 'Número de nómina',
    placeholder: 'Seleccione Nómina',
    options: PayrollOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  return (
    <>
      {showVehicleCategory && (
        <VehicleCategory onOptionSelect={handleOptionSelect} onClose={() => setShowVehicleCategory(false)} />
      )}
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.CreateUnits}>
          <p className={styles.title}>Registro de nuevo <label> Vehículo{selectedOption === 'assignment' ? ' de asignación' : ' pool'}</label></p>
          <div className={styles.form}>
            <p className={styles.titleData}>Datos generales</p>
            <div className={styles.inputs1}>
              <div style={{ width: '438px' }} className={styles.inputName}>
                <InputText2
                  name='name'
                  label='Nombre de unidad'
                  placeholder='Ingrese nombre del contacto'
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.important}>
                  <Image src={IconInfo} alt='icon' />
                  <p>Nombre de max 20 caracteres (Irrepetible)</p>
                </div>
              </div>
              <div style={{ width: '168px' }} className={styles.inputName}>
                <InputText2
                  name='number'
                  label=''
                  placeholder='No. expediente'
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.important}>
                  <Image src={IconInfo} alt='icon' />
                  <p>Ingresa 5 digitos únicos</p>
                </div>
              </div>
            </div>
            <div className={styles.set}>
              <div className={styles.inputs1}>
                <div style={{ width: '235px' }}>
                  <Dropdown {...dropdownType} />
                </div>
                <div style={{ width: '275px' }}>
                  <Dropdown {...dropdownBrand} />
                </div>
                <div style={{ width: '207px' }}>
                  <Dropdown {...dropdownLine} />
                </div>
                <div style={{ width: '110px' }}>
                  <InputText2
                    name='model'
                    label='Modelo'
                    placeholder='Ingrese año'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '104px' }}>
                  <InputText2
                    type='number'
                    name='occupants'
                    label='Ocupantes'
                    placeholder='0'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '158px' }}>
                  <InputText2
                    type='text'
                    name='color'
                    label='Color'
                    placeholder='Ingresar color'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '170px' }}>
                  <InputText2
                    type='text'
                    name='plates'
                    label='Placas'
                    placeholder='Ingresar placas'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '219px' }}>
                  <InputText2
                    type='text'
                    name='serialnumber'
                    label='Número de serie'
                    placeholder='Ingrese número de serie'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '238px' }}>
                  <InputText2
                    type='text'
                    name='enginenumber'
                    label='Número de motor'
                    placeholder='Ingresar número de motor'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
            </div>
            <div style={{ width: '777px', marginTop: '10px' }}>
              <InputTextArea
                name='description'
                label='Descripción del vehículo'
                placeholder=''
                rows={5}
                variant='secondary'
                height='126px'
                width='100%'
                rules={{ required: false }}
              />
            </div>
            <div className={styles.excel} style={{ marginTop: '22px' }}>
              <div style={{ width: '288px' }} className={styles.inputName}>
                <InputText2
                  type='text'
                  name='policy'
                  label='Póliza'
                  placeholder=''
                  variant='primary'
                  disabled
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.important}>
                  <Image src={IconInfo} alt='icon' />
                  <p>Cargar desde archivo de Excel que entrega la aseguradora</p>
                </div>
              </div>
              <div style={{ width: '278px' }} className={styles.inputName}>
                <InputText2
                  type='text'
                  name='subsection'
                  label='Inciso'
                  placeholder=''
                  variant='primary'
                  disabled
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.important}>
                  <Image src={IconInfo} alt='icon' />
                  <p>Cargar desde archivo de Excel que entrega la aseguradora</p>
                </div>
              </div>
              <div >
                <FileUpload name='invoice' variant='tertiary' required={false} />
              </div>
            </div>
            <div className={styles.set} style={{ marginTop: '37px' }}>
              <div className={styles.inputs1}>
                <div style={{ width: '227px' }}>
                  <Dropdown {...dropdownUse} />
                </div>
                <div style={{ width: '227px' }}>
                  <Dropdown {...dropdownCenter} />
                </div>
                <div style={{ width: '186px' }}>
                  <Dropdown {...dropdownKey} />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '389px' }}>
                  <Dropdown {...dropdownAddress} />
                </div>
                <div style={{ width: '243px' }}>
                  <Dropdown {...dropdownPayroll} />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '318px' }}>
                  <InputText2
                    name='co'
                    label='Orden CO'
                    placeholder='Ingrese orden CO'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '223px' }}>
                  <InputText2
                    name='booths'
                    label='Clave para cruzar casetas 1'
                    placeholder='Ingrese clave'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '223px' }}>
                  <InputText2
                    name='booths'
                    label='Clave para cruzar casetas 2'
                    placeholder='Ingrese clave'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.VehicleDocuments}>
              <p className={styles.titleDocuments}>Documentos del vehículo</p>
              <div className={styles.fileupload}>
                <label style={{ fontSize: '12px', color: '#455362', fontWeight: '500', marginLeft: '15px' }}>Subir factura</label>
                <FileUpload name='invoice' variant='secondary' required={false} />
              </div>
              <div className={styles.fileupload}>
                <label style={{ fontSize: '12px', color: '#455362', fontWeight: '500', marginLeft: '15px' }}>Refrendo</label>
                <FileUpload name='endorsement' variant='secondary' required={false} />
              </div>
              <div className={styles.fileupload}>
                <label style={{ fontSize: '12px', color: '#455362', fontWeight: '500', marginLeft: '15px' }}>Carta responsiva</label>
                <FileUpload name='letter' variant='secondary' required={false} />
              </div>
              <div className={styles.circulationCard}>
                <label style={{ fontSize: '12px', color: '#455362', fontWeight: '500', marginLeft: '15px' }}>Subir tarjeta de circulación</label>
                <ImageUpload name='circulation' height='197px' showHandlePhoto={false} label='' title='Subir foto' />
              </div>
            </div>
            <div className={styles.VehiclePhotos}>
              <p className={styles.title}>Fotos del vehículo</p>
              <div className={styles.container}>
                <div className={styles.photo}>
                  <ImageUpload name='photo1' height='176px' showHandlePhoto={false} label='' title='Subir foto' />
                </div>
                <div className={styles.photo}>
                  <ImageUpload name='photo2' height='176px' showHandlePhoto={false} label='' title='Subir foto' />
                </div>
                <div className={styles.photo}>
                  <ImageUpload name='photo3' height='176px' showHandlePhoto={false} label='' title='Subir foto' />
                </div>
                <div className={styles.photo}>
                  <ImageUpload name='photo4' height='176px' showHandlePhoto={false} label='' title='Subir foto' />
                </div>
              </div>
            </div>
            <div className={styles.trackingfueling}>
              <p className={styles.title}>Rastreo y carga de gasolina</p>
              <div className={styles.tracking}>
                <div className={styles.inputs1}>
                  <div style={{ width: '276px' }}>
                    <InputText2
                      type='text'
                      name='satellitekey'
                      label='Clave satélite del GPS'
                      placeholder='Ingrese clave'
                      variant='primary'
                      height='35px'
                      rules={{ required: true }}
                    />
                  </div>
                  <div style={{ width: '440px' }}>
                    <InputText2
                      type='text'
                      name='trackingprovider'
                      label='Proveedor de rastreo de satélite'
                      placeholder='Ingrese nombre de proveedor'
                      variant='primary'
                      height='35px'
                      rules={{ required: true }}
                    />
                  </div>
                </div>
                <div className={styles.inputs2}>
                  <div className={styles.percentage}>
                    <label>Porcentaje de diferencia</label>
                    <div className={styles.InputIcon}>
                      <Image src={porciento} alt='' />
                      <div style={{ width: '116px' }}>
                        <InputText2
                          type='text'
                          name=''
                          label=''
                          placeholder='00'
                          variant='primary'
                          height='35px'
                          rules={{ required: true }}
                        />
                      </div>
                    </div>
                    <div className={styles.important}>
                      <Image src={IconInfo} alt='icon' />
                      <p>Para la carga de combustible</p>
                    </div>
                  </div>
                  <div className={styles.reminder}>
                    <label>Recordatorio mantenimiento</label>
                    <div className={styles.InputIcon}>
                      <div style={{ width: '112px' }}>
                        <InputText2
                          type='text'
                          name=''
                          label=''
                          placeholder='00'
                          variant='primary'
                          height='35px'
                          rules={{ required: true }}
                        />
                      </div>
                      <p className={styles.month}>meses</p>
                    </div>
                    <div className={styles.important}>
                      <Image src={IconInfo} alt='icon' />
                      <p>Meses para realizar mantenimiento, esto se le notificara al usuario.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.inputs1}>
                  <div style={{ width: '255px' }}>
                    <InputText2
                      type='text'
                      name='mileage'
                      label='Kilometraje inicial'
                      placeholder='0000.00 km'
                      variant='primary'
                      height='35px'
                      rules={{ required: true }}
                    />
                    <div className={styles.important}>
                      <Image src={IconInfo} alt='icon' />
                      <p>Kilometraje actual del vehículo</p>
                    </div>
                  </div>
                  <div style={{ width: '255px' }}>
                    <InputText2
                      type='text'
                      name='mileageaccepted'
                      label='Kilometraje aceptado'
                      placeholder='0000.00 km'
                      variant='primary'
                      height='35px'
                      rules={{ required: true }}
                    />
                    <div className={styles.important}>
                      <Image src={IconInfo} alt='icon' />
                      <p>Mínimo de diferencia entre el kilometraje inicial para solicitar mantenimiento. ( general 10,000 km )</p>
                    </div>
                  </div>
                  <div style={{ width: '255px' }}>
                    <InputText2
                      type='text'
                      name='kilometerwindow'
                      label='Ventana de kilómetros'
                      placeholder='0000.00 km'
                      variant='primary'
                      height='35px'
                      rules={{ required: true }}
                    />
                    <div className={styles.important}>
                      <Image src={IconInfo} alt='icon' />
                      <p>Ventana de kilómetros de un tanque lleno.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lease}>
              <p className={styles.title}>Arrendamiento</p>
              <div className={styles.inputs1}>
                <div style={{ width: '232px' }}>
                  <InputText2
                    type='text'
                    name='supplier'
                    label='Proveedor'
                    placeholder='Ingrese nombre'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '180px' }}>
                  <InputText2
                    type='date'
                    name='date1'
                    label='Fecha inicial'
                    placeholder=''
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '180px' }}>
                  <InputText2
                    type='date'
                    name='date2'
                    label='Fecha final'
                    placeholder=''
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '349px' }}>
                  <InputText2
                    type='text'
                    name='contract'
                    label='Contrato'
                    placeholder='Ingrese contrato de Arrendamiento'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '142px' }}>
                  <InputText2
                    type='text'
                    name='amount'
                    label='Importe'
                    placeholder='$00.00'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '142px' }}>
                  <InputText2
                    type='text'
                    name='value'
                    label='Valor residual'
                    placeholder='$00.00'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div style={{ width: '280px' }}>
                <Button height='40px' variant='secondary'>Cancelar</Button>
              </div>
              <div style={{ width: '280px' }}>
                <Button height='40px' variant='primary'>Guardar</Button>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
