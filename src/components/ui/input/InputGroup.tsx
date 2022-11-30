import React, { Fragment } from 'react'

export interface InputGroupProps {
  label?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputGroup: React.FC<InputGroupProps> = ({ label = 'Campo', handleChange }) => {
  return (
    <Fragment>
      <div className="flex flex-col items-start mb-2 basis-2/4 ">
        <label className="block mb-1 font-inter text-base font-medium text-ui-gray-700">{label}</label>
        <div className="relative mt-1 rounded-md border border-ui-gray-300 w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">S/.</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="w-full h-9 rounded-md border-gray-300 pl-8 pr-12  sm:text-sm focus:outline-none focus:border-2 focus:border-ui-primary-600"
            placeholder="0.00"
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm"
            >
              <option>PEN</option>
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
