import { gql } from '@apollo/client'

export interface LoginUserInput {
  password: string
  username: string
}
export interface AccessTokenResponse {
  login: {
    accessToken: string
    refreshToken: string
  }
}

export const LOGIN = gql`
  mutation login($data: LoginUserInput!) {
    login(loginUserInput: $data) {
      accessToken
      refreshToken
    }
  }
`
