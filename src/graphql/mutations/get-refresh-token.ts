import { gql } from '@apollo/client'

export const GET_REFRESH_TOKEN = gql`
  mutation getRefreshToken($token: String!) {
    getRefreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`
