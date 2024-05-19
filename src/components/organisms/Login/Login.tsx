import { useContext } from 'react'
import Link from 'next/link'
import styles from './Login.module.scss'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import Button from '@/components/molecules/Button/Button/Button'
import { ModalLoading } from '@/components/molecules/ModalLoading/ModalLoading'
import { AuthContext } from '@/context/AuthContext'

export default function Login () {
  //
  const { loading, loadingSite, loginService } = useContext(AuthContext)
  const methods = useForm()

  return (
    <FormHookProvider methods={methods} onSubmit={loginService}>
      <div className={styles.form}>
        <div className={styles.form_header}>
          <h1>Hola, <span>Bienvenido</span></h1>
          <p>Ingresa tu usuario y contraseña</p>
        </div>
        <div className={styles.form_body}>
          <div style={{ width: '300px' }}>
            <InputText
              name='email'
              label='Usuario'
              placeholder='Usuario'
              variant='primary'
              height='45px'
              rules={{ required: true }}
            />
          </div>
          <div style={{ width: '300px' }}>
            <InputPassword
              name='password'
              label='Contraseña'
              placeholder='Contraseña'
              feedback={false}
              height='45px'
              visible
              rules={{
                required: true
                // minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres.' }
              }}
            />
          </div>
        </div>
        <div className={styles.form_footer}>
          <div style={{ width: '300px' }}>
            <Button height='35px' variant='primary' loading={loading}>Iniciar sesión</Button>
          </div>
          <Link href='/recover-password/email' className={styles.form_link}>Recuperar contraseña</Link>
        </div>
      </div>
      <ModalLoading
        visible={loadingSite}
      />
    </FormHookProvider>
  )
}
