export type AuthActions =
  | {
      type: 'login'
      token?: string
    }
  | {
      type: 'logout'
    }
