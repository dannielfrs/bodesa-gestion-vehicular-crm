import React, { useRef, useState } from 'react'
import styles from './EditProfile.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Button from '@/components/molecules/Button/Button/Button'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import { useRouter } from 'next/navigation'
import señalcorrecto from '@/../public/images/icons/señalcorrecto.svg'
import { Toast } from 'primereact/toast'

export default function EditProfile () {
  const methods = useForm()
  const router = useRouter()
  const toast = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const onSubmit = () => { 
    if (toast.current !== null) {
      setVisible(true);
      toast.current.show({
        severity: 'secondary',
        life: 2000,
        content: (props: any) => (
          <div className={styles.dFlex}>
            <Image src={señalcorrecto} alt='' className={styles.imagePading} />
            <div className={styles.pR40pxW200}>
              <div className={styles.toastGreen}>Guardado con exito</div>
              <div className={styles.toastGray}>Se ha actualizado tu acceso</div>
            </div>
          </div>
        )
      });
    }
  }

  const [password, setPassword] = useState('')
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setIsPasswordCorrect(newPassword === '123456')
  }

  const [isEditMode, setIsEditMode] = useState(false)
  const handleEditClick = () => {
    setIsEditMode(!isEditMode)
  }


  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <Toast ref={toast} />
        <div className={styles.EditProfile}>
          <div className={styles.top}>
            <div className={styles.back} onClick={() => router.push('/system/home')} style={{cursor: 'pointer'}}>
              <Image src={IconBack} alt='' />
            </div>
            <div className={styles.textProfile}>
              <p className={styles.text}>Editar perfil</p>
              <p className={styles.text2}>Actualiza tu foto de perfil y accesos</p>
            </div>
          </div>
          <div className={styles.addPhoto}>
            <ImageUpload height='200px' showHandlePhoto={false} label='' title='' variant='primary' editIcon={true} />
          </div>
          <div className={styles.updateAccesses}>
            <div className={styles.first}>
              <div className={styles.left}>
                <p className={styles.title1}>Actualizar accesos</p>
                <p className={styles.title2}>Actualiza tu contraseña</p>
              </div>
              <div className={styles.right}>
                <Button variant='secondary' type='button' height='35px' onClick={handleEditClick}>{isEditMode ? 'Cerrar' : 'Editar'}</Button>
              </div>
            </div>
            {isEditMode && (
              <div className={styles.second}>
                <div style={{ width: '357px' }}>
                  <InputPassword
                    name='password'
                    label=''
                    placeholder='Contraseña actual'
                    feedback={false}
                    height='45px'
                    visible
                    onChange={handlePasswordChange}
                    rules={{
                      required: true
                      // minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres.' }
                    }}
                  />
                </div>
                <div style={{ width: '357px' }}>
                  <InputPassword
                    name='password2'
                    label=''
                    placeholder='Nueva contraseña'
                    feedback={false}
                    height='45px'
                    visible
                    disabled={!isPasswordCorrect}
                    rules={{
                      required: true
                    }}
                  />
                </div>
                <div style={{ width: '357px' }}>
                  <InputPassword
                    name='password3'
                    label=''
                    placeholder='Confirmar contraseña'
                    feedback={false}
                    height='45px'
                    visible
                    disabled={!isPasswordCorrect}
                    rules={{
                      required: true
                    }}
                  />
                </div>
                <div className={styles.buttonSave}>
                  <Button variant='primary' height='40px' disabled={!isPasswordCorrect} type='submit'>Guardar cambios</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
