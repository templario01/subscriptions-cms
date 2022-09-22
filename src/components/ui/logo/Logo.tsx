import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../shared/assets/logomark.png'
export const Logo = () => {
  return (
    <div className="w-full flex items-center gap-2 mx-1.5 py-4">
      <NavLink to="/cms/home">
        <img className="w-10 h-10" src={logo} alt="logo" />
      </NavLink>
      <NavLink to="/cms/home">
        <h1 className="font-semibold text-xl">Prime Manager</h1>
      </NavLink>
    </div>
  )
}
