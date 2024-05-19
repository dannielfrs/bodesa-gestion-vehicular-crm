import { createContext } from "react"
import { SubmitHandler, FieldValues } from "react-hook-form"

interface ContextType {
  loading: boolean
  data: any[]
  itemData: { [key: string]: any }
  getRequestItemService: Function
  acceptNewRequestService: Function
  declineNewRequestService: Function
  savedSuccessful: boolean
}

export const FuelLoadContext = createContext<ContextType>({
  loading: true,
  data: [],
  itemData: {},
  getRequestItemService: () => { },
  acceptNewRequestService: () => { },
  declineNewRequestService: () => { },
  savedSuccessful: false
})
