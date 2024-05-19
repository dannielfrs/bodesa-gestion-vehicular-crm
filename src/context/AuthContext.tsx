import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface AuthContextType {
  loading: boolean
  loadingSite: boolean
  loginService: SubmitHandler<FieldValues>
  registerService: SubmitHandler<FieldValues>
  sendEmailService: SubmitHandler<FieldValues>
  verifyCodeService: Function
  resendCodeService: () => void
  changePasswordService: SubmitHandler<FieldValues>
  updateProfileService: SubmitHandler<FieldValues>
  logoutService: () => void
}

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  loadingSite: false,
  loginService: () => { },
  registerService: () => { },
  sendEmailService: () => { },
  verifyCodeService: () => { },
  resendCodeService: () => { },
  changePasswordService: () => { },
  updateProfileService: () => { },
  logoutService: () => { },
})
