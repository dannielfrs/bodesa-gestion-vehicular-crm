import { useContext } from 'react'
import styles from './Email.module.scss'
import Image from 'next/image'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import InputText from '@/components/molecules/InputText/InputText'
import Button from '@/components/molecules/Button/Button/Button'
import { AuthContext } from '@/context/AuthContext'
import companyPet from '@/../public/images/company_pet.svg'
import iconEmail from '@/../public/images/icons/email.svg'

export default function Email () {
  //
  const { loading, sendEmailService } = useContext(AuthContext)
  const methods = useForm()
  const router = useRouter()

  return (
    <FormHookProvider methods={methods} onSubmit={sendEmailService}>
      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image
            src={companyPet}
            alt='image'
          />
          <div className={styles.form_title}>
            <h1>Recuperar <span>contraseña</span></h1>
            <p>Se enviara un código de recuperación a la dirección correo electrónico </p>
          </div>
        </div>
        <div className={styles.form_body}>
          <div style={{ width: '325px' }}>
            <InputText
              name='email'
              label=''
              placeholder='Correo electrónico'
              icon={iconEmail}
              iconPosRight
              variant='primary'
              height='45px'
              rules={{ required: true }}
            />
          </div>
        </div>
        <div className={styles.form_footer}>
          <div style={{ width: '220px' }}>
            <Button
              type='button'
              onClick={() => router.push('/')}
              height='35px'
              variant='secondary'
            >
              Cancelar
            </Button>
          </div>
          <div style={{ width: '220px' }}>
            <Button
              height='35px'
              variant='primary'
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
