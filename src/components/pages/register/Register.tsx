import React, { useContext, useState } from 'react'
import { RegisterContext, RegisterContextType, StepEnum } from '../../../context/registerContext'
import { RegisterProvider } from '../../../context/RegisterProvider'
import { Buttom } from '../../ui/buttoms/Buttom'
import { InputTextSection } from '../../ui/form/molecules/InputTextSection'
import { MultistepBarProps, MultistepProgressBar, ProgressEnum } from '../../ui/multistep-bar/MultistepProgressBar'
import { CreateAccount } from './CreateAccount'
import { VerifyAccount } from './VerifyAccount'

export const Register = () => {
  const { step } = useContext(RegisterContext) as RegisterContextType

  return (
    <div className="mx-auto w-full h-full flex items-center justify-center text-center">
      <div className="flex justify-start flex-col gap-3.5 w-form-1  h-2/3">
        <MultistepProgressBar
          size="small"
          phase={
            step === StepEnum.ONE
              ? ProgressEnum['20%']
              : step === StepEnum.TWO
              ? ProgressEnum['60%']
              : ProgressEnum['100%']
          }
        />
        {step === StepEnum.ONE ? <CreateAccount /> : <VerifyAccount />}
      </div>
    </div>
  )
}
