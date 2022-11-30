export interface ErrorExtension {
  code: string
  response: {
    statusCode: number
    message: string[]
    error: string
  }
}

export interface GraphQLError extends Error {
  extensions: ErrorExtension
}
