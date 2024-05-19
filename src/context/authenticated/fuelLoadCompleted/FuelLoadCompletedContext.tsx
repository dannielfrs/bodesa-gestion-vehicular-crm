import { createContext } from "react"
import { SubmitHandler, FieldValues } from "react-hook-form"

interface ContextType {
  loading: boolean
  data: any[]
  documents: any[]
  getDocumentsService: Function
  getGroupDocumentsService: Function
}

export const FuelLoadCompletedContext = createContext<ContextType>({
  loading: true,
  data: [],
  documents: [],
  getDocumentsService: () => { },
  getGroupDocumentsService: () => { },
})