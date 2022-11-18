import React, { useState } from 'react'
import { SessionContext } from './SessionContext'

type SessionProviderProps = {
  children?: React.ReactNode
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>('access-token')
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <SessionContext.Provider
      value={{
        isAuth,
        token,
        setToken,
        setIsAuth,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
