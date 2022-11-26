import { gql } from '@apollo/client'

export interface createSubscriptionAccountInput {
  data: {
    email: string
    isSoldBySlots: boolean
    platformUUID: string
    password: string
    slots: number
    slotPrice: number
    completePrice: number
  }
}

export interface createSubscriptionAccountResponse {
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
