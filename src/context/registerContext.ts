import { createContext } from 'react'

type RegisterContextType = {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  code: string
  confirmPassword: string
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
  setCode: React.Dispatch<React.SetStateAction<string>>
  onNextStep: () => void
}

export const RegisterContext = createContext<RegisterContextType | null>(null)
