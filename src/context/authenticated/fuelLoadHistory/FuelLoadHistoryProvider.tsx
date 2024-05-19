import { memo, useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import { FuelLoadHistoryContext } from "./FuelLoadHistoryContext"
import { SubmitHandler, FieldValues } from "react-hook-form"
import { alertError, alertLoading, alertSuccess } from "@/utilities/alerts"
import { axiosGet, axiosPost } from "@/services/axios/api"

export const FuelLoadHistoryProvider = memo(({ children }: { children: React.ReactNode }) => {

  const params = useParams<{ id: string }>()
  const id = params?.id
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (id) getDataService()
  }, [id])

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

  return (
    <FuelLoadHistoryContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </FuelLoadHistoryContext.Provider>
  )
})

FuelLoadHistoryProvider.displayName = 'FuelLoadHistoryProvider'
