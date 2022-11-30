/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react'

export interface AutoincrementInputProps {
  label?: string
  value?: string
  handleIncrement?: (e: any) => void
  handleDecrement?: (e: any) => void
  handleChange?: (e: any) => void
}

export const AutoincrementInput: React.FC<AutoincrementInputProps> = ({
  label = 'default name',
  value = '0',
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <Fragment>
      <div className="flex w-full flex-col text-start">
        <label className="block mb-1 font-inter text-base font-medium text-ui-gray-700">{label}</label>
        <div className="h-10 bg-white flex border border-ui-gray-300 rounded items-center">
          <button
            onClick={handleDecrement}
            data-action="decrement"
            className="border-r border-ui-gray-300 bg-white text-gray-600 hover:text-gray-700 hover:bg-ui-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            readOnly
            className="outline-none text-ui-gray-700 focus:outline-none text-center w-full bg-white font-semibold text-md
              md:text-basecursor-default flex items-center "
            name="custom-input-number"
            value={value}
          ></input>
          <button
            onClick={handleIncrement}
            data-action="increment"
            className="border-l border-ui-gray-300 bg-white text-gray-600 hover:text-gray-700 hover:bg-ui-gray-200 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </Fragment>
  )
}
