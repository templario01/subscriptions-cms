import React, { Fragment } from 'react'

export interface CheckboxItemProps {
  name?: string
  description?: string
  isChecked?: boolean
  handleCheck?: () => void
}

export const CheckboxItem: React.FC<CheckboxItemProps> = ({
  description = 'default description',
  name = 'Default name',
  isChecked = true,
  handleCheck
}) => {
  return (
    <Fragment>
      <div className="flex flex-row gap-2">
        <div className="flex mt-1.5">
          <input
            id="helper-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
            className="accent-ui-primary-700 w-4 h-4 text-ui-primary-700 rounded border-gray-300 focus:ring-ui-primary-600
             dark:focus:ring-ui-primary-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="">
          <label className="font-medium text-ui-gray-700 dark:text-gray-300">{name}</label>
          <p id="helper-checkbox-text" className="text-xs font-normal text-ui-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export interface InputCheckboxProps {
  name?: string
  children?: React.ReactNode
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({ children, name }) => {
  return (
    <Fragment>
      <div className="flex flex-col text-start basis-2/4">
        <label className="mb-1 font-inter text-base font-medium text-ui-gray-700">{name}</label>
        <div className="flex flex-col gap-1">{children}</div>
      </div>
    </Fragment>
  )
}
