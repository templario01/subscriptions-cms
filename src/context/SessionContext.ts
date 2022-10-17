import { createContext, Dispatch, SetStateAction } from 'react'

export type SessionContextType = {
  isAuth: boolean
  token: string
  setToken: Dispatch<SetStateAction<string>>
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const SessionContext = createContext<SessionContextType | null>(null)
