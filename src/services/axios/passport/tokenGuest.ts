import axios, { AxiosResponse } from 'axios'
import { alertError } from '@/utilities/alerts'
import Cookies from 'js-cookie'
import { encrypt } from '@/utilities/encryption'
import { TOKEN } from '@/utilities/authConstants'

export const getTokenGuestService = async () => {
  try {
    const serverURL = process.env.NEXT_PUBLIC_SERVER_GUEST as string
    const form = new FormData()
    form.append('secret', process.env.NEXT_PUBLIC_SECRET_GUEST as string)
    const response: AxiosResponse = await axios.post(`${serverURL}/guest/guest-token`, form)
    Cookies.set(TOKEN, encrypt(response.data.data.token_guest))
    return response.data.data.token_guest
  } catch (error: any) {
    alertError('Error', error)
  }
}