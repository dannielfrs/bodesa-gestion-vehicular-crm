import { useContext } from 'react'
import styles from './UpdatePassword.module.scss'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import Button from '@/components/molecules/Button/Button/Button'
import { AuthContext } from '@/context/AuthContext'

export default function UpdatePassword() {
  //
  const { loading, changePasswordService } = useContext(AuthContext)
  const methods = useForm()
  const router = useRouter()

  return (
    <FormHookProvider methods={methods} onSubmit={changePasswordService}>
      <div className={styles.form}>
        <div className={styles.form_header}>
          <h1>Actualizar <span>accesos</span></h1>
          <p>Ingresa contraseña</p>
        </div>
        <div className={styles.form_body}>
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
          <div style={{ width: '300px' }}>
            <InputPassword
              name='password_confirmation'
              label='Confirmar contraseña'
              placeholder='Confirmar contraseña'
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
            <Button
              height='35px'
              variant='primary'
            >
              Guardar
            </Button>
          </div>
          <div style={{ width: '300px' }}>
            <Button
              type='button'
              onClick={() => router.push('/')}
              height='35px'
              variant='secondary'
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
