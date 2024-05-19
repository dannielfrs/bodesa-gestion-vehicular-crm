import { useEffect, useState } from "react"
import { FuelLoadContext } from "./FuelLoadContext"
import { SubmitHandler, FieldValues } from "react-hook-form"
import { alertError, alertLoading, alertSuccess } from "@/utilities/alerts"
import { axiosGet, axiosPost } from "@/services/axios/api"

export const FuelLoadProvider = ({ children }: { children: React.ReactNode }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [itemData, setItemData] = useState({})
  const [savedSuccessful, setSavedSuccessful] = useState<boolean>(false)

  useEffect(() => {
    getDataService()
  }, [])

  const getDataService = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosGet("/crm/fuel-load/new-request", form)
      setData(response.data)
      return response
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  const getRequestItemService = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosGet(`/crm/fuel-load/request/${id}`, form)
      setItemData(response.data)
      return response.data
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  const acceptNewRequestService = async (data: any, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      if (data.sensor_liters) form.append("sensorLiters", data.sensor_liters)
      const response = await axiosPost(`/crm/fuel-load/accepted/${id}`, form)
      setSavedSuccessful(true)
      setTimeout(() => {
        setSavedSuccessful(false)
      }, 3000)
      getDataService()
      return response
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  const declineNewRequestService = async (data: any, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      if (data.comments) form.append("comment", data.comments)
      const response = await axiosPost(`/crm/fuel-load/decline/${id}`, form)
      setSavedSuccessful(true)
      setTimeout(() => {
        setSavedSuccessful(false)
      }, 3000)
      getDataService()
      return response
    } catch (error: any) {
      alertError("Error", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FuelLoadContext.Provider
      value={{
        loading,
        data,
        itemData,
        getRequestItemService,
        acceptNewRequestService,
        declineNewRequestService,
        savedSuccessful,
      }}
    >
      {children}
    </FuelLoadContext.Provider>
  )
}
