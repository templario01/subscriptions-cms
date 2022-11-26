import { gql } from '@apollo/client'
import { IPaginatedResponse } from './paginated-query'

export interface Platform {
  name: string
  logo: string
  uuid: string
}

export interface SubscriptionAccount {
  slots: number
  availableSlots?: string
  slotPrice?: number
  uuid: string
  email: string
  completePrice: number
  isActive: boolean
  password: string
  platform: Platform
}

export interface GetSubscriptionAccountResponse {
  getAllSubscriptionAccounts: IPaginatedResponse<SubscriptionAccount>
}

export interface GetSubscriptionAccountParams {
  name?: string
  take?: number
  after?: string
}

export const GET_ALL_SUBSCRIPTION_ACCOUNTS = gql`
  query getAllSubscriptionAccounts($name: String, $take: Int, $after: String) {
    getAllSubscriptionAccounts(name: $name, take: $take, after: $after) {
      nodes {
        slots
        availableSlots
        slotPrice
        uuid
        email
        password
        completePrice
        isActive
        platform {
          name
          logo
          uuid
        }
      }
      hasNextPage
      totalCount
      endCursor
    }
  }
`
