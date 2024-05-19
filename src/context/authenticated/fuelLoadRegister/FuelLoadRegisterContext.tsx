import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  dataRegister: any[]
  itemData: { [key: string]: any }
  getItemService: Function
  saveDataService: Function
  cancelService: Function
  savedSuccess: boolean
  onOptionsChange: Function
  selectedOptions: any[]
  groupData: { [key: string]: any }
  getGroupItemService: Function
  createGroupService: Function
  finishGroupService: Function
  deleteGroupService: Function
}

export const FuelLoadRegisterContext = createContext<ContextType>({
  loading: true,
  dataRegister: [],
  itemData: {},
  getItemService: () => { },
  saveDataService: () => { },
  cancelService: () => { },
  savedSuccess: false,
  onOptionsChange: () => { },
  selectedOptions: [],
  groupData: {},
  getGroupItemService: () => { },
  createGroupService: () => { },
  finishGroupService: () => { },
  deleteGroupService: () => { },
})
