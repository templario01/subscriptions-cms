import React from 'react'
import { useAuthState } from '../../../context/AuthProvider'
import { Logo } from '../logo/Logo'
import { SeparatorBar } from '../separator/SeparatorBar'
import { SessionCard } from '../sesion-card/SessionCard'
import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {
  const auth = useAuthState()
  return (
    <div className="px-5 h-full md:w-76 shadow-md absolute bg-white flex flex-col justify-between">
      <div>
        <Logo />
        <SeparatorBar />
        <ul className="relative mt-5">
          <SidebarItem name="inicio" routeTo="cms/home" />
          <SidebarItem name="cuentas" routeTo="cms/accounts" />
          <SidebarItem name="reportes" routeTo="cms/platforms" />
          <SidebarItem name="clientes" routeTo="cms/customers" />
        </ul>
      </div>
      <div>
        <ul className="relative mb-5">
          <SidebarItem name="configuración" routeTo="cms/settings" />
        </ul>
        <SeparatorBar />
        <SessionCard email={auth.email} name='Prime Account' avatar={auth.avatar}/>
      </div>
    </div>
  )
}
