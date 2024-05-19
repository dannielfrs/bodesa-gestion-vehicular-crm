import { memo, useEffect, useState } from "react"
import { FuelLoadCompletedContext } from "./FuelLoadCompletedContext"
import { SubmitHandler, FieldValues } from "react-hook-form"
import { alertError, alertLoading, alertSuccess } from "@/utilities/alerts"
import { axiosGet, axiosPost } from "@/services/axios/api"

export const FuelLoadCompletedProvider = memo(({ children }: { children: React.ReactNode }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [documents, setDocuments] = useState<any[]>([{ imageUrl: '' }])

  useEffect(() => {
    getDataService()
  }, [])

  const getDataService = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosPost('/crm/fuel-load/list-finish', form)
      setData(response.data)
      return response
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  const getDocumentsService = async (id: string, type: string) => {
    try {
      const form = new FormData()
      const response: any = await axiosGet(`/crm/fuel-load/document/${id}`, form)
      if (type === 'photos') {
        let array = []
        if (response.data.pictureOdometer) array.push({ imageUrl: response.data.pictureOdometer?.url })
        if (response.data.pictureTicket) array.push({ imageUrl: response.data.pictureTicket?.url })
        if (response.data.pictureVoucher) array.push({ imageUrl: response.data.pictureVoucher?.url })
        setDocuments(array)
      } else if (type === 'ticket') {
        setDocuments([{ imageUrl: response.data.pictureReceipt?.url }])
      }
      return response.data
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  const getGroupDocumentsService = async (id: string, type: string) => {
    try {
      const form = new FormData()
      const response: any = await axiosGet(`/crm/fuel-load/group-document/${id}`, form)
      if (type === 'photos') {
        let array = []
        if (response.data.pictureOdometer) array.push({ imageUrl: response.data.pictureOdometer?.url })
        if (response.data.pictureTicket) array.push({ imageUrl: response.data.pictureTicket?.url })
        if (response.data.pictureVoucher) array.push({ imageUrl: response.data.pictureVoucher?.url })
        setDocuments(array)
      } else if (type === 'ticket') {
        setDocuments([{ imageUrl: response.data.pictureReceipt?.url }])
      }
      return response.data
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FuelLoadCompletedContext.Provider
      value={{
        loading,
        data,
        documents,
        getDocumentsService,
        getGroupDocumentsService,
      }}
    >
      {children}
    </FuelLoadCompletedContext.Provider>
  )
})

FuelLoadCompletedProvider.displayName = 'FuelLoadCompletedProvider'
