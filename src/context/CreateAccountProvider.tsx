import React, { useState } from 'react'
import { SuscriptionAccount } from '../graphql/mutations/create-subscription-account'
import { CreateAccountContext } from './createAccountContext'

type CreateAccountProviderProps = {
  children?: React.ReactNode
}

export const CreateAccountProvider: React.FC<CreateAccountProviderProps> = ({ children }) => {
  const [newAccount, setNewAccount] = useState<SuscriptionAccount>({
    completePrice: 0,
    email: '',
    isSoldBySlots: false,
    password: '',
    platformUUID: '',
    slotPrice: 0,
    slots: 0,
  })

  return <CreateAccountContext.Provider value={{ newAccount, setNewAccount }}>{children}</CreateAccountContext.Provider>
}
