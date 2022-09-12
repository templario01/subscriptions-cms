import React from 'react'
import { NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../../shared/utils/utils'
import { NavIcon } from './SidebarIcon'

interface NavItemProps {
  name: 'configuración' | 'inicio' | 'cuentas' | 'clientes' | 'plataformas'
  routeTo?: string
}

export const SidebarItem: React.FC<NavItemProps> = ({ name, routeTo }) => {
  return (
    <div className="flex gap-3">
      <li className="relative w-full">
        <NavLink
          className="flex gap-3 items-center text-sm py-4 px-4 h-12 overflow-hidden text-gray-700 hover:bg-gray-100"
          to={`/${routeTo}`}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <NavIcon icon={name} />
          <span className="text-base">{capitalizeFirstLetter(name)}</span>
        </NavLink>
      </li>
    </div>
  )
}
