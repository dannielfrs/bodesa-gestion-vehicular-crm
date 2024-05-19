import React, { useEffect, useState } from 'react'
import styles from './UserData.module.scss'
import Image from 'next/image'
import user2 from '@/../public/images/user2.png'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'

import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import FileUpload from '@/components/molecules/FileUpload/FileUpload'
import { RadioButton } from '@/components/molecules/RadioButtonAltern/RadioButton'

export default function UserData ({ isEditing }: { isEditing: boolean }) {
  const methods = useForm()
  const onSubmit = () => { }
  
  const [selectedOption, setSelectedOption] = useState<string>()
  useEffect(() => {
    methods.setValue('gender', 'female')
  }, [])
  
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.UserData}>
          <div className={styles.container1}>
              <div className={styles.photoUser}>
                <ImageUpload disabled={!isEditing} name='photo' height='160px' defaultImage='/images/user2.png' showHandlePhoto={false} label='' title='' />
              </div>
            <div className={styles.information}>
              <p className={styles.title}>Datos generales</p>
              <div className={styles.inputs1}>
                <div style={{ width: '319px' }}>
                  <InputText2
                    name='name'
                    type='text'
                    label='Nombre completo'
                    readOnly={!isEditing}
                    placeholder='Ingrese nombre del usuario'
                    variant='primary'
                    value='ADRIAN PLAZA PEGUEROLES'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '88px' }}>
                  <InputText2
                    name='age'
                    type='text'
                    label='Edad'
                    readOnly={!isEditing}
                    placeholder='Ingrese edad'
                    variant='primary'
                    value='35 años'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <RadioButton
                  name='gender'
                  inputId='female'
                  value='female'
                  readOnly={!isEditing}
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
                  readOnly={!isEditing}
                  defaultValue='female'
                  setValue={setSelectedOption}
                  label='Masculino'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '294px' }}>
                  <InputText2
                    name='email'
                    type='text'
                    label='Correo electrónico'
                    readOnly={!isEditing}
                    placeholder='Ingrese correo electrónico'
                    variant='primary'
                    value='Jamey64@hotmail.com'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div className={styles.inputsPhone}>
                  <label>Número de celular</label>
                  <div className={styles.both}>
                    <div className={styles.lada}>
                      <InputText2
                        name='number'
                        type='text'
                        label=''
                        readOnly={!isEditing}
                        placeholder=''
                        variant='primary'
                        value='+52'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                    <div className={styles.number}>
                      <InputText2
                        name='number2'
                        type='text'
                        label=''
                        readOnly={!isEditing}
                        placeholder=''
                        variant='primary'
                        value='95 94 25 24'
                        height='35px'
                        rules={{ required: false }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '274px' }}>
                <InputText2
                  name='position'
                  type='text'
                  label='Puesto'
                  readOnly={!isEditing}
                  placeholder='Ingrese puesto'
                  variant='primary'
                  value='Supervisor de cobranza externa'
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <p className={styles.title}>Domicilio</p>
              <div className={styles.inputs1}>
                <div style={{ width: '303px' }}>
                  <InputText2
                    name='address'
                    type='text'
                    label='Calle'
                    readOnly={!isEditing}
                    placeholder='Ingrese calle'
                    variant='primary'
                    value='Calz. Pedro A. Galván Sur'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '99px' }}>
                  <InputText2
                    name='no'
                    type='text'
                    label='No.'
                    readOnly={!isEditing}
                    placeholder='No.'
                    variant='primary'
                    value='#301'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '99px' }}>
                  <InputText2
                    name='colonia'
                    type='text'
                    label='Colonia'
                    readOnly={!isEditing}
                    placeholder='Ingrese colonia'
                    variant='primary'
                    value='San Pablo'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
              </div>
              <div className={styles.inputs1}>
                <div style={{ width: '303px' }}>
                  <InputText2
                    name='municipality'
                    type='text'
                    label='Municipio'
                    readOnly={!isEditing}
                    placeholder='Ingrese municipio'
                    variant='primary'
                    value='Cuauhtemoc'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
                <div style={{ width: '303px' }}>
                  <InputText2
                    name='state'
                    type='text'
                    label='Colima'
                    readOnly={!isEditing}
                    placeholder='Ingrese Estado'
                    variant='primary'
                    value='Colima'
                    height='35px'
                    rules={{ required: false }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containers}>
            <div className={styles.container2}>
              <div className={styles.titles}>
                <p className={styles.license}>Licencia de conducir</p>
                <p className={styles.status}>Estatus: <label>Vigente</label></p>
              </div>
              <div className={styles.vehicleRegistration}>
                <ImageUpload disabled={!isEditing} name='photo' height='200px' defaultImage='/images/odometro.jpg' showHandlePhoto={false} label='' title='' />
              </div>
            </div>
            <div className={styles.container3}>
              <p className={styles.rules}>Reglamento firmado por el usuario</p>
              <div className={styles.fileupload}>
                <FileUpload disabled={!isEditing} label='' variant='secondary' required={false} />
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
