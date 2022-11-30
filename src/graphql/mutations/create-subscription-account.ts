import { gql } from '@apollo/client'

export interface SuscriptionAccount {
  email?: string
  isSoldBySlots?: boolean
  platformUUID?: string
  password?: string
  slots?: number
  slotPrice?: number | string
  completePrice?: number | string
}

export interface CreateSubscriptionAccountInput {
  data: SuscriptionAccount
}

export interface CreateSubscriptionAccountResponse {
  createSubscriptionAccount: {
    completePrice: number
    createdAt: Date
    email: string
    isActive: boolean
    isSoldBySlots: boolean
    slotPrice: number
    uuid: string
    password: string
  }
}

export const CREATE_SUBSCRIPTION_ACCOUNT = gql`
  mutation ($data: CreateSubscriptionAccountInput!) {
    createSubscriptionAccount(data: $data) {
      completePrice
      createdAt
      email
      isActive
      isSoldBySlots
      slotPrice
      uuid
      password
      platform {
        logo
        name
        uuid
      }
    }
  }
`
