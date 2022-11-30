/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloQueryResult, FetchMoreQueryOptions } from "@apollo/client"
import { GetSubscriptionAccountParams, GetSubscriptionAccountResponse } from "../queries/get-all-suscription-accounts"

export type IFetchMore = <
  TFetchData = GetSubscriptionAccountResponse,
  TFetchVars = GetSubscriptionAccountParams
>(
  fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
    updateQuery?:
      | ((
          previousQueryResult: any,
          options: {
            fetchMoreResult: TFetchData
            variables: TFetchVars
          }
        ) => any)
      | undefined
  }
) => Promise<ApolloQueryResult<TFetchData>>

export type Variables = {
  after: string
  take: number
}

export type IFetchMoreResult = {
  fetchMoreResult: GetSubscriptionAccountResponse
  variables: Variables
}