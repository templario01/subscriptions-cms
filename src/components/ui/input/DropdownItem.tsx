import React, { Fragment } from 'react'

export interface DropdownItemProps {
  name: string
  logo: string
  handleClick?: () => void
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ name, logo, handleClick }) => {
  return (
    <Fragment>
      <li className="cursor-pointer" onClick={handleClick}>
        <a className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <img className="mr-2 w-6 h-6 rounded-full" src={logo} alt="" />
          {name}
        </a>
      </li>
    </Fragment>
  )
}
