import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'

export const Edit = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div
      data-tip="Editar"
      className="w-auto hover:cursor-pointer"
      onMouseEnter={() => {
        setIsActive(true)
      }}
      onMouseLeave={() => {
        setIsActive(false)
      }}
    >
      <ReactTooltip />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isActive ? '#6941C6' : '#667085'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-edit-3"
      >
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    </div>
  )
}
