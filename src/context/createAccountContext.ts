import React, { createContext } from 'react'
import { SuscriptionAccount } from '../graphql/mutations/create-subscription-account'

export type CreateAccountContextType = {
  newAccount: SuscriptionAccount
  setNewAccount: React.Dispatch<React.SetStateAction<SuscriptionAccount>>
}

export const CreateAccountContext = createContext<CreateAccountContextType | null>(null)
