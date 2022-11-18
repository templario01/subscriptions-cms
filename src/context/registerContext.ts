import { createContext } from 'react'

export enum StepEnum {
  'ONE' = 'one',
  'TWO' = 'two',
  'THREE' = 'three',
}

export type RegisterContextType = {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  code: string
  confirmPassword: string
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
  setCode: React.Dispatch<React.SetStateAction<string>>
  step: StepEnum
  setStep: React.Dispatch<React.SetStateAction<StepEnum>>
}

export const RegisterContext = createContext<RegisterContextType | null>(null)
