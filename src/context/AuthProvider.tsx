import { useReducer, useState } from 'react'
import { AuthContext } from './AuthContext'
import { decrypt, encrypt } from '@/utilities/encryption'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { AUTHENTICATED, AUTHENTICATED_USER, LOGGED_IN, TOKEN } from '@/utilities/authConstants'
import Cookies from 'js-cookie'
import { authReducer } from './authReducer'
import { authTypes } from '@/types/authTypes'
import { useRouter } from 'next/navigation'
import { AxiosResponse } from 'axios'
import { axiosGet, axiosPost } from '@/services/axios/api'
import { alertError, alertLoading, alertSuccess, closeAlerts } from '@/utilities/alerts'

const initial = () => {
  const user = (Cookies.get(AUTHENTICATED_USER)) ? JSON.parse(decrypt(Cookies.get(AUTHENTICATED_USER))) : {}
  return {
    isLoggedIn: decrypt(Cookies.get(AUTHENTICATED)) === LOGGED_IN,
    user
  }
}

const prefix = '/system'

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [authState, dispatch] = useReducer(authReducer, {}, initial)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingSite, setLoadingSite] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [verificationToken, setVerificationToken] = useState<string>('')

  const loginService: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('email', data.email)
      form.append('password', data.password)
      const response: any = await axiosPost('/auth/authenticate', form)
      setLoadingSite(true)
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(response.data)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(response.data.access_token))
      const action = {
        type: authTypes.login,
        payload: { user: response.data }
      }
      dispatch(action)
      router.replace(`${prefix}/home`)
    } catch (error: any) {
      alertError('Error', error)
      setLoading(false)
    } finally {
      // setLoading(false)
    }
  }

  const registerService: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('name', data.name)
      form.append('last_name', data.last_name)
      form.append('phone_number', data.phone_number)
      form.append('email', data.email)
      form.append('password', data.password)
      form.append('password_confirmation', data.password_confirmation)
      const response: any = await axiosPost('authenticate/register', form)
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(response.data.user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(response.data.user.token.access_token))
      const action = {
        type: authTypes.login,
        payload: {
          user: response.data.user
        }
      }
      dispatch(action)
      setTimeout(() => {
        router.replace(`${prefix}/home`)
      }, 3000)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const sendEmailService: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      setEmail(data.email)
      const form = new FormData()
      form.append('email', data.email)
      const response: any = await axiosPost('/auth/reset/first-step', form)
      router.push('/recover-password/verification-code')
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const verifyCodeService = async (code: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('code', code)
      form.append('email', email)
      const response: any = await axiosPost('/auth/reset/second-step', form)
      setVerificationToken(response.data.token)
      router.push('/recover-password/update-password')
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const resendCodeService = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('email', email)
      const response: any = await axiosPost('/auth/reset/first-step', form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const changePasswordService: SubmitHandler<FieldValues> = async (data) => {
    try {
      const form = new FormData()
      form.append('token', verificationToken)
      form.append('password', data.password)
      form.append('passwordConfirm', data.password_confirmation)
      const response: any = await axiosPost('/auth/reset/third-step', form)
      router.push('/')
      return response
    } catch (error: any) {
      alertError('Error', error)
    }
  }

  const updateProfileService: SubmitHandler<FieldValues> = async (data) => {
    try {
      alertLoading('', 'Estamos actualizando tu perfil. ')
      const form = new FormData()
      const response: any = await axiosPost('authenticate/', form)
      const user = response.data.record.user
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
      const action = {
        type: authTypes.login,
        payload: { user }
      }
      dispatch(action)
      router.push('/system/my-account/profile')
    } catch (error: any) {
      alertError('Error', error)
    } finally {
    }
  }

  const logoutService = () => {
    const action = {
      type: authTypes.logout,
      payload: {}
    }
    dispatch(action)
    router.push('/')
    // window.location.reload()
  }

  return (
    <AuthContext.Provider value={{
      loading,
      loadingSite,
      loginService,
      registerService,
      sendEmailService,
      verifyCodeService,
      changePasswordService,
      updateProfileService,
      logoutService,
      resendCodeService,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
