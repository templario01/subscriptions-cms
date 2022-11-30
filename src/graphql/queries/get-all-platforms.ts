import { gql } from '@apollo/client'

export interface Platform {
  name: string
  logo: string
  uuid: string
}

export interface GetAllPlatformsResponse {
  getAllPlatforms: Platform[]
}

export interface GetAllPlatformsParams {
  name?: string
}

export const GET_ALL_PLATFORMS = gql`
  query getAllPlatforms($name: String) {
    getAllPlatforms(name: $name) {
      logo
      name
      uuid
    }
  }
`
