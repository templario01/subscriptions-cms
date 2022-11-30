import React from 'react'

interface InputTextSectionProps {
  isPassword?: boolean
  placeholder?: string
  label: string
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  inputHandleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  autocomplete?: boolean
}

export const InputTextSection: React.FC<InputTextSectionProps> = ({
  inputHandleChange,
  onFocusOut,
  onFocus,
  errorMessage = '',
  isPassword = false,
  label = 'Example',
  placeholder = '',
  autocomplete = false,
}) => {
  return (
    <div className="flex flex-col items-start mb-2">
      <label className="block mb-1 font-inter text-base font-medium text-ui-gray-700">{label}</label>
      <input
        onChange={inputHandleChange}
        type={isPassword ? 'password' : 'text'}
        className="text-sm rounded-lg block w-full p-2.5 bg-white border border-ui-gray-300 text-ui-gray-700 
        focus:outline-none focus:border-2 focus:border-ui-primary-600"
        placeholder={placeholder}
        onBlur={onFocusOut}
        onFocus={onFocus}
        autoComplete={autocomplete === true ? 'on' : 'off'}
      />
      {errorMessage?.length > 0 && <span className="text-red-600 text-sm">{errorMessage}</span>}
    </div>
  )
}
