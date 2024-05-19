import { useEffect, useState } from 'react'
import { FuelLoadRegisterContext } from './FuelLoadRegisterContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { axiosGet, axiosPost, axiosDelete } from '@/services/axios/api'

export const FuelLoadRegisterProvider = ({ children }: { children: React.ReactNode }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [dataRegister, setDataRegister] = useState([])
  const [itemData, setItemData] = useState({})
  const [groupData, setGroupData] = useState({})
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false)
  const [selectedOptions, setSelectedOptions] = useState<any[]>([])

  useEffect(() => {
    getDataService()
  }, [])

  const getDataService = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosGet('crm/fuel-load/list-accepted', form)
      setDataRegister(response.data)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getItemService = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosGet(`/crm/fuel-load/request/${id}`, form)
      setItemData(response.data)
      return response.data
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveDataService = async (data: any, imageFile: File, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('recharge', data.recharge)
      form.append('pictureReceipt', imageFile)
      if (data.comment) form.append('comment', data.comment)
      const response = await axiosPost(`/crm/fuel-load/finished/${id}`, form)
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
      }, 3000)
      getDataService()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const cancelService = async (data: any, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      if (data.comments) form.append('comment', data.comments)
      const response = await axiosPost(`/crm/fuel-load/cancel/${id}`, form)
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
      }, 2000)
      getDataService()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getGroupItemService = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      const response: any = await axiosGet(`crm/fuel-load/group-show/${id}`, form)
      setGroupData(response.data)
      return response.data
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const onOptionsChange = (id: string, checked: boolean) => {
    let _selectedOptions = [...selectedOptions]
    if (!checked)
      _selectedOptions.push(id)
    else
      _selectedOptions = _selectedOptions.filter(item => item !== id)
    setSelectedOptions(_selectedOptions)
  }

  const createGroupService = async (data: any, groupData: any) => {
    try {
      setLoading(true)
      const form = new FormData()
      groupData.forEach((item: any, index: number) => {
        form.append(`uuid[${index}]`, item.id)
        form.append(`desiredAmount[${index}]`, item.desiredAmount)
      })
      if (data.desiredAmount) form.append('AmountEqual', data.desiredAmount)
      form.append('ApplyEqual', data.equal_amount)
      form.append('clientId', data.clientId)
      form.append('product', data.product)
      const response = await axiosPost('crm/fuel-load/group', form)
      // setSavedSuccess(true)
      // setTimeout(() => {
      //   setSavedSuccess(false)
      // }, 2000)
      getDataService()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const finishGroupService = async (data: any, imageFile: File, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('invoice', data.unique_number)
      form.append('fullRecharge', data.total_recharge)
      form.append('pictureInvoice', imageFile)
      if (data.comments) form.append('observation', data.comments)
      const response = await axiosPost(`/crm/fuel-load/group-finish/${id}`, form)
      // setSavedSuccess(true)
      // setTimeout(() => {
      //   setSavedSuccess(false)
      // }, 2000)
      getDataService()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteGroupService = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await axiosDelete(`/crm/fuel-load/group/${id}`, form)
      // setSavedSuccess(true)
      // setTimeout(() => {
      //   setSavedSuccess(false)
      // }, 2000)
      getDataService()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FuelLoadRegisterContext.Provider value={{
      loading,
      dataRegister,
      itemData,
      getItemService,
      saveDataService,
      cancelService,
      savedSuccess,
      onOptionsChange,
      selectedOptions,
      groupData,
      getGroupItemService,
      createGroupService,
      finishGroupService,
      deleteGroupService,
    }}>
      {children}
    </FuelLoadRegisterContext.Provider>
  )
}
