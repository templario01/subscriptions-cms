import { createContext, Dispatch } from 'react'
import { AuthActions } from '../state/actions/authActions'
import { authInitialState } from '../state/reducers/authReducer'
import { User } from '../types'

export const AuthStateContext = createContext<User>(authInitialState)

export const AuthDispatchContext = createContext<Dispatch<AuthActions>>(() => undefined)
