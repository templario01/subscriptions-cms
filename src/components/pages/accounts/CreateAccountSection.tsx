import React, { Fragment } from 'react'
import { Plus } from '../../icons/Plus'
import { DropdownItem } from '../../ui/input/DropdownItem'

export interface CreateAccountSectionProps {
  isVisible?: boolean
  handleBack?: () => void
}

export const CreateAccountSection: React.FC<CreateAccountSectionProps> = ({ isVisible = false, handleBack }) => {
  return (
    <Fragment>
      <div className={isVisible ? '' : 'hidden'}>
        <div>
          <button onClick={handleBack}>Regresar</button>
        </div>
        <div className="w-64">
          <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
            <input
              placeholder="Buscar plataforma..."
              name="select"
              id="select"
              className="px-4 appearance-none outline-none text-gray-800 w-full"
              defaultChecked
            />
            <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <label className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </label>
          </div>

          <div id="dropdownUsers" className="w-64 bg-white rounded shadow dark:bg-gray-700">
            <ul
              className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
              <DropdownItem name="Node" />
            </ul>
            <a
              href="#"
              className="flex items-center p-3 text-sm font-medium text-ui-primary-700 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
            >
              <Plus />
              &nbsp;Crear plataforma
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
