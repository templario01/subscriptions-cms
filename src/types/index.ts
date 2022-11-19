export type User = {
  email: string
  token: string
  isAuthenticated: boolean
}

export type DecodedJwt = {
  id: number
  username: string
  phone: string
  roles: string[]
  iat: number
  exp: number
}

export type RouteType = 'PRIVATE' | 'PUBLIC' | 'GUEST'