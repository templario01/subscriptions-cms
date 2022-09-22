import React from 'react'
import { Buttom } from '../../ui/buttoms/Buttom'
import { InputTextSection } from '../../ui/form/molecules/InputTextSection'
import { MultistepProgressBar } from '../../ui/multistep-bar/MultistepProgressBar'
import { CreateAccount } from './CreateAccount'
import { VerifyAccount } from './VerifyAccount'

export const Register = () => {
  return (
    <div className="mx-auto w-full h-full flex items-center justify-center text-center">
      <div className="flex justify-start flex-col gap-3.5 w-form-1  h-2/3">
        <MultistepProgressBar size="small" phase="20%" />
        <CreateAccount />
      </div>
    </div>
  )
}
