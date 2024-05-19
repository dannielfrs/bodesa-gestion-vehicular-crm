import { useContext, useEffect, useState } from 'react'
import styles from './VerificationCode.module.scss'
import Link from 'next/link'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Button from '@/components/molecules/Button/Button/Button'
import { AuthContext } from '@/context/AuthContext'
import OtpInput from 'react-otp-input'

export default function VerificationCode () {
  //
  const { loading, verifyCodeService, resendCodeService } = useContext(AuthContext)
  const methods = useForm()
  const router = useRouter()
  const [code, setCode] = useState('')
  const [invalid, setInvalid] = useState(false)

  const onSubmit = () => {
    if (code.length === 6) {
      verifyCodeService(code)
    } else {
      setInvalid(true)
    }
  }

  useEffect(() => {
    if (invalid && code.length === 6) setInvalid(false)
  }, [invalid, code])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.form_header}>
          <h1>Código <span>de verificación</span></h1>
          <p>Ingresa el código de verificación enviado a tu correo electrónico para continuar.</p>
        </div>
        <div className={styles.form_body}>
          <OtpInput
            value={code}
            onChange={setCode}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
            containerStyle={styles.form_code_container}
            inputStyle={`${styles.form_code_input} ${invalid && styles.form_code_invalid}`}
          />
        </div>
        <Link href='#' className={styles.form_link} onClick={resendCodeService}>Reenviar código</Link>
        <div className={styles.form_footer}>
          <div style={{ width: '220px' }}>
            <Button
              type='button'
              onClick={() => router.push('/recover-password/email')}
              height='35px'
              variant='secondary'
            >
              Volver
            </Button>
          </div>
          <div style={{ width: '220px' }}>
            <Button
              height='35px'
              variant='primary'
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
