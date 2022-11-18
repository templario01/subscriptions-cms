import React, { useContext, useState } from 'react'
import logo from '../../../shared/assets/logomark.png'
import { Buttom } from '../../ui/buttoms/Buttom'
import { InputTextSection } from '../../ui/form/molecules/InputTextSection'
import { NavLink, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { AccessTokenResponse, LOGIN, LoginUserInput } from '../../../graphql/mutations/login'
import { SessionContext, SessionContextType } from '../../../context/SessionContext'

const validationSchema = {
  username: yup.object({
    validMail: yup.string().required('Ingresa tu correo electronico').email('Ingresa un correo valido'),
  }),
  password: yup.object({
    validPassword: yup.string().required('Ingresa tu contraseña').min(6, 'Debe ser de un minimo de 6 caracteres'),
  }),
}

export const Login = () => {
  const { setIsAuth, setToken } = useContext(SessionContext) as SessionContextType
  const [username, setUsername] = useState<string>('')
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('')
  const [login] = useMutation<AccessTokenResponse>(LOGIN)
  const navigate = useNavigate()

  const usernameHandleFocusOut = async () => {
    const usernameValidation = await validationSchema.username.validate({ validMail: username }).catch((err) => {
      return err.message
    })
    if (typeof usernameValidation === 'string') {
      setUsernameErrorMessage(usernameValidation)
    } else {
      setUsernameErrorMessage('')
    }
  }

  const passwordHandleFocusOut = async () => {
    const passwordValidation = await validationSchema.password.validate({ validPassword: password }).catch((err) => {
      return err.message
    })

    if (typeof passwordValidation === 'string') {
      setPasswordErrorMessage(passwordValidation)
    } else {
      setPasswordErrorMessage('')
    }
  }

  const onFocusHandler = () => {
    setUsernameErrorMessage('')
    setPasswordErrorMessage('')
  }

  const usernameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    const request: LoginUserInput = {
      username,
      password,
    }
    const { data } = await login({ variables: { data: request } })
    const refreshToken = data?.login?.refreshToken as string
    const accessToken = data?.login?.accessToken as string

    localStorage.setItem('refresh_token', refreshToken)
    localStorage.setItem('access_token', accessToken)
    setToken(refreshToken)
    setIsAuth(true)
    navigate('/cms')
  }

  return (
    <div className="container mx-auto w-full h-full flex items-center justify-center">
      <div className="flex justify-center flex-col gap-3.5 w-form-1 text-center">
        <div className="w-full flex items-center justify-center">
          <img className="w-14" src={logo}></img>
        </div>
        <h1 className="font-bold text-3xl">Ingresa a tu cuenta</h1>
        <span className="text-ui-gray-500 pb-3">
          Bienvenido de vuelta, por favor ingresa
          <br />
          tus datos.
        </span>
        <div className="flex flex-col gap-2">
          <InputTextSection
            label="Correo"
            placeholder="example@gmail.com"
            onFocusOut={usernameHandleFocusOut}
            inputHandleChange={usernameHandleChange}
            errorMessage={usernameErrorMessage}
            onFocus={onFocusHandler}
          />
          <InputTextSection
            label="Contraseña"
            placeholder="********"
            isPassword={true}
            onFocusOut={passwordHandleFocusOut}
            inputHandleChange={passwordHandleChange}
            errorMessage={passwordErrorMessage}
            onFocus={onFocusHandler}
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex gap-2">
            <input id="checkbox-item-11" type="checkbox" value="" className="accent-ui-primary-700" />
            <span>Recordarme</span>
          </div>
          <div>
            <span className="text-ui-primary-600">
              <NavLink to="/">Olvidé mi contraseña</NavLink>
            </span>
          </div>
        </div>
        <Buttom description="Ingresar" handleClick={handleLogin}></Buttom>
      </div>
    </div>
  )
}
