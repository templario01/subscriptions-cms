import React, { useState } from 'react'

import { RegisterContext, StepEnum } from './registerContext'

type RegisterProviderProps = {
  children?: React.ReactNode
}

export const RegisterProvider: React.FC<RegisterProviderProps> = ({ children }) => {
  const [code, setCode] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [step, setStep] = useState<StepEnum>(StepEnum.ONE)

  return (
    <RegisterContext.Provider
      value={{
        code,
        confirmPassword,
        email,
        password,
        setPassword,
        setCode,
        setConfirmPassword,
        setEmail,
        step,
        setStep,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
