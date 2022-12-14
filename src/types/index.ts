export type User = {
  email: string
  token: string
  isAuthenticated: boolean
  avatar?: string
}

export type DecodedJwt = {
  id: number
  username: string
  phone: string
  roles: string[]
  iat: number
  exp: number
  avatar?: string
}
