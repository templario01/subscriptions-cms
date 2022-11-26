import React, { Fragment } from 'react'

export interface DropdownItemProps {
  name: string
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ name }) => {
  return (
    <Fragment>
      <li>
        <a
          href="#"
          className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <img
            className="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Jese image"
          />
          {name}
        </a>
      </li>
    </Fragment>
  )
}
