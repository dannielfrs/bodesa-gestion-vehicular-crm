import { AUTHENTICATED, LOGGED_IN, TOKEN } from '@/utilities/authConstants'
import { decrypt } from '@/utilities/encryption'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

instance.interceptors.request.use(function (config: any) {
  const token = decrypt(Cookies.get(TOKEN))
  const auth = [LOGGED_IN]
  config.baseURL = auth.includes(decrypt(Cookies.get(AUTHENTICATED))) ? process.env.NEXT_PUBLIC_SERVER_AUTH : process.env.NEXT_PUBLIC_SERVER_GUEST
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const axiosGet = async (url: string, data?: any) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params: data })
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: any) => {
        const errorMessage = (error?.response?.data?.error) ? error.response.data.error : error.message
        reject(errorMessage)
      })
  })
}

export const axiosPost = async (url: string, data: any = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: any) => {
        const errorMessage = (error?.response?.data?.error) ? error.response.data.error : error.message
        reject(errorMessage)
      })
  })
}

export const axiosDelete = async (url: string, data?: any) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, { params: data })
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error: any) => {
        const errorMessage = (error?.response?.data?.error) ? error.response.data.error : error.message
        reject(errorMessage)
      })
  })
}