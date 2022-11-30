import React, { Fragment, ReactNode } from 'react'
import { Plus } from '../../icons/Plus'

export interface DropdownProps {
  children?: ReactNode
  name?: string
  isOpen?: boolean
  handleSearch?: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCleanInput?: (e: any) => void
  handleOpenDropdown?: () => void
  handleFocus?: () => void
  inputValue?: string
  elements?: number
  inputLogo?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  name = 'Default name',
  isOpen = false,
  elements = 0,
  handleFocus,
  handleSearch,
  handleCleanInput,
  handleOpenDropdown,
  inputValue,
  inputLogo = '',
}) => {
  return (
    <Fragment>
      <div className="flex flex-col basis-2/4 items-start mb-2">
        <label className="block mb-1 font-inter text-base font-medium text-ui-gray-700">{name}</label>
        <div className="w-64">
          <div className="h-10 bg-white flex border border-ui-gray-300 rounded items-center">
            <img
              src={inputLogo}
              alt=""
              className={`mr-2 ml-2 w-6 h-6 rounded-full ${inputLogo.length > 0 ? '' : 'hidden'}`}
            />
            <input
              onChange={handleSearch}
              onFocus={handleFocus}
              placeholder="Buscar plataforma..."
              value={inputValue}
              name="select"
              id="select"
              className={`appearance-none outline-none text-gray-800 w-full ${inputLogo.length > 0 ? '' : 'px-4 '}`}
              defaultChecked
            />
            <button
              onClick={handleCleanInput}
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
            >
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
            <label
              onClick={handleOpenDropdown}
              className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
            >
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

          <div
            id="dropdownUsers"
            className={`w-64 bg-white rounded shadow dark:bg-gray-700 ${!isOpen ? 'hidden' : ''}`}
          >
            <ul
              className={`overflow-y-auto py-1 text-gray-700 dark:text-gray-200 ${elements >= 5 ? 'h-48' : 'h-auto'}`}
              aria-labelledby="dropdownUsersButton"
            >
              {children}
            </ul>
            <a className="flex items-center p-3 text-sm font-medium text-ui-primary-700 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
              <Plus />
              &nbsp;Crear plataforma
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
