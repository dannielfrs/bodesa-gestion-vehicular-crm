import React from 'react'
import styles from './CreateAdministrator.module.scss'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import Image from 'next/image'
import IconInfo from '@/../public/images/icons/IconInfo.svg'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export default function CreateAdministrator () {
  const methods = useForm()
  const onSubmit = () => { }
  const TypeOptions = [
    { name: 'Seleccione el tipo de cuenta', value: 'Seleccione el tipo de cuenta' },
    { name: 'Gestión vehicular', value: 'Gestión vehicular' },
    { name: 'Gestión de usuarios', value: 'Gestión de usuarios' },
    { name: 'Gestión de mantenimiento', value: 'Gestión de mantenimiento' }
  ]
  const dropdownType = {
    name: 'type',
    label: 'Tipo de cuenta:',
    placeholder: 'Seleccione el tipo de cuenta',
    options: TypeOptions,
    // disabled: disabled,
    // readOnly: disabled,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '40px',
    panelClassName: styles.primary
  }
  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.CreateAdministrator}>
        <p className={styles.title}>Registro de nuevo <label>Administrador</label></p>
        <div className={styles.registrationData}>
          <p className={styles.title2}>Datos de registro</p>
          <div className={styles.inputs1}>
            <div style={{ width: '282px' }}>
              <InputText2
                type='text'
                name='user'
                label='Usuario'
                placeholder='Asigne nombre'
                variant='primary'
                height='35px'
                rules={{ required: true }}
              />
              <div className={styles.important}>
                <Image src={IconInfo} alt='icon' />
                <p>Nombre de la cuenta</p>
              </div>
            </div>
            <div style={{ width: '282px' }}>
              <InputText2
                type='text'
                name='password'
                label='Contraseña'
                placeholder='Contraseña'
                variant='primary'
                height='35px'
                rules={{ required: true }}
              />
              <div className={styles.important}>
                <Image src={IconInfo} alt='icon' />
                <p>Contraseña única para esta cuenta</p>
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.adminPhoto}>
              <ImageUpload name='adminPhoto' height='160px' showHandlePhoto={false} label='' title='Subir foto' />
            </div>
            <div className={styles.inputs2}>
              <div className={styles.row1}>
                <div style={{ width: '334px' }}>
                  <InputText2
                    type='text'
                    name='nameR'
                    label='Nombre del responsable'
                    placeholder='Ingrese nombre del usuario'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '334px' }}>
                  <InputText2
                    type='text'
                    name='email2'
                    label='Correo electrónico'
                    placeholder='Ingrese correo electrónico'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div className={styles.celphone}>
                  <label>Número de celular</label>
                  <div className={styles.inputs}>
                    <div style={{ width: '59px' }}>
                      <InputText2
                        type='text'
                        name='lada'
                        label=''
                        placeholder='+00'
                        variant='primary'
                        height='35px'
                        rules={{ required: true }}
                      />
                    </div>
                    <div style={{ width: '205px' }}>
                      <InputText2
                        type='text'
                        name='number'
                        label=''
                        placeholder='00 00 00 00'
                        variant='primary'
                        height='35px'
                        rules={{ required: true }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div style={{ width: '334px' }}>
                  <InputText2
                    type='text'
                    name='position'
                    label='Puesto'
                    placeholder='Ingrese el puesto'
                    variant='primary'
                    height='35px'
                    rules={{ required: true }}
                  />
                </div>
                <div style={{ width: '300px' }}>
                  <Dropdown {...dropdownType} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
