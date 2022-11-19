import React, { FC, useContext, useReducer } from 'react'
import { authInitialState, AuthReducer } from '../state/reducers/authReducer'
import { AuthDispatchContext, AuthStateContext } from './authContext'

type AuthProviderProps = {
  children?: React.ReactNode
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, authInitialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => {
  const context = useContext(AuthStateContext)

  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider')
  }

  return context
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext)
  
    if (context === undefined) {
      throw new Error('useAuthDispatch must be used within an AuthProvider')
    }
  
    return context
  }
  