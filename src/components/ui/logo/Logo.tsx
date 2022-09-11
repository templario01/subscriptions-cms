import React from 'react'
import logo from '../../../shared/assets/logomark.png'
export const Logo = () => {
  return (
    <div className="w-full flex items-center gap-2 mx-1.5 py-4">
      <img className="w-10 h-10" src={logo} alt="logo" />
      <h1 className="font-semibold text-xl">Prime Manager</h1>
    </div>
  )
}
