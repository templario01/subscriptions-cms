import React, { Fragment, useContext } from 'react'
import { RegisterContext, RegisterContextType, StepEnum } from '../../../context/registerContext'
import { Buttom } from '../../ui/buttoms/Buttom'
import { InputTextSection } from '../../ui/form/molecules/InputTextSection'

export const CreateAccount = () => {
  const { setStep } = useContext(RegisterContext) as RegisterContextType

  return (
    <Fragment>
      <h1 className="font-bold text-3xl">Crear una cuenta</h1>
      <span className="text-ui-gray-500 pb-3">Exelente! Por favor ingresa tus datos y dale click en continuar</span>
      <div className="flex flex-col gap-2">
        <InputTextSection
          label="Correo"
          placeholder="example@gmail.com"
          onFocusOut={() => undefined}
          inputHandleChange={() => undefined}
          errorMessage={''}
          onFocus={() => undefined}
        />
        <InputTextSection
          label="Contraseña"
          placeholder="********"
          isPassword={true}
          onFocusOut={() => undefined}
          inputHandleChange={() => undefined}
          errorMessage={''}
          onFocus={() => undefined}
        />
        <InputTextSection
          label="Confirmar contraseña"
          placeholder="********"
          isPassword={true}
          onFocusOut={() => undefined}
          inputHandleChange={() => undefined}
          errorMessage={''}
          onFocus={() => undefined}
        />
      </div>
      <Buttom
        handleClick={() => {
          setStep(StepEnum.TWO)
        }}
        description="Continuar"
      ></Buttom>
    </Fragment>
  )
}
