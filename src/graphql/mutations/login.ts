import { gql } from '@apollo/client'

export interface LoginUserInput {
  data: {
    username: string
    password: string
  }
}

export interface LoginUserResponse {
  login: {
    accessToken: string
    refreshToken: string
  }
}

export const LOGIN = gql`
  mutation ($data: LoginUserInput!) {
    login(loginUserInput: $data) {
      accessToken
      refreshToken
    }
  }
`
