import { createContext } from "react"
import { SubmitHandler, FieldValues } from "react-hook-form"

interface ContextType {
  loading: boolean
  data: any[]
}

export const FuelLoadHistoryContext = createContext<ContextType>({
  loading: true,
  data: [],
})