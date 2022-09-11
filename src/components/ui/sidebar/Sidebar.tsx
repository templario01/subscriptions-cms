import React from 'react'
import { Logo } from '../logo/Logo'
import { SeparatorBar } from '../separator/SeparatorBar'
import { SessionCard } from '../sesion-card/SessionCard'
import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {
  return (
    <div className="px-5 h-full w-76 shadow-md absolute bg-white flex flex-col justify-between">
      <div>
        <Logo />
        <SeparatorBar />
        <ul className="relative mt-5">
          <SidebarItem name="inicio" />
          <SidebarItem name="cuentas" />
          <SidebarItem name="plataformas" />
          <SidebarItem name="clientes" />
        </ul>
      </div>
      <div>
        <ul className="relative mb-5">
          <SidebarItem name="configuración" />
        </ul>
        <SeparatorBar />
        <SessionCard />
      </div>
    </div>
  )
}
