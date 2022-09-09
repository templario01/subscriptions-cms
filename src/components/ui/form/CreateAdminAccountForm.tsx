import React from 'react'
import { InputTextSection } from './molecules/InputTextSection'

export const CreateAdminAccountForm = () => {

  const inputChange = (e:any) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <form>
      <InputTextSection label='Nombre' placeholder='Nombre' inputHandleChange={inputChange}/>
      </form>
    </div>
  )
}
