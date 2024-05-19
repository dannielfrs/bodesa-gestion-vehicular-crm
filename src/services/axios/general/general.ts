import { axiosGet } from '@/services/axios/api'
import { alertError } from '@/utilities/alerts'

export const downloadExcelService = async (url: string, filename: string) => {
  try {
    const form = new FormData()
    const response: any = await axiosGet(url, form)
    const blob = new Blob([response], { type: 'application/vnd.ms-excel' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    link.click()
    return response
  } catch (error: any) {
    alertError('Error', error)
  }
}