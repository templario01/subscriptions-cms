import { useMutation } from '@apollo/client'
import React, { Fragment, useContext } from 'react'
import { useAuthDispatch } from '../../../context/AuthProvider'
import { RegisterContext, RegisterContextType, StepEnum } from '../../../context/registerContext'
import { LOGIN, LoginUserInput, LoginUserResponse } from '../../../graphql/mutations/login'
import { LeftArrow } from '../../icons/LeftArrow'
import { RefreshArrows } from '../../icons/RefreshArrows'
import { Buttom } from '../../ui/buttoms/Buttom'
import { SquareInput } from '../../ui/input/SquareInput'

export const VerifyAccount = () => {
  const { setStep, email, password } = useContext(RegisterContext) as RegisterContextType
  const [login, { error, data }] = useMutation<LoginUserResponse, LoginUserInput>(LOGIN)
  const authDispatch = useAuthDispatch()

  const handleLogin = async () => {
    await login({
      variables: {
        data: { username: email, password },
      },
    })
    authDispatch({ type: 'login', token: data?.login.accessToken })

    if (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <Fragment>
      <h1 className="font-bold text-3xl">Verificar Correo</h1>
      <span className="text-ui-gray-500 pb-3">
        Te enviamos un codigo de verificación, por favor revisa tu bandeja de entrada y spam
      </span>
      <div className="flex flex-col gap-2">
        <div id="otp" className="grid grid-cols-4  gap-3">
          <SquareInput />
          <SquareInput />
          <SquareInput />
          <SquareInput />
        </div>
        <div className="flex justify-center items-center gap-1">
          <RefreshArrows />
          <span
            className="text-ui-primary-700 text-sm cursor-pointer"
          >
            Reenviar codigo
          </span>
        </div>
      </div>
      <Buttom description="Finalizar" handleClick={handleLogin}></Buttom>
      <div className="flex justify-center items-center gap-2 text-ui-gray-500">
        <LeftArrow />
        <span className="cursor-pointer" onClick={() => setStep(StepEnum.ONE)}>
          Regresar a crear cuenta
        </span>
      </div>
    </Fragment>
  )
}
