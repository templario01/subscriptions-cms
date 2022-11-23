import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'

export interface IconExitProps {
  iconClick?: () => void
}

export const IconExit: React.FC<IconExitProps> = ({ iconClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div
      data-tip="Salir"
      className="w-auto hover:cursor-pointer"
      onMouseEnter={() => {
        setIsActive(true)
      }}
      onMouseLeave={() => {
        setIsActive(false)
      }}
      onClick={iconClick}
    >
      <ReactTooltip />
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 16H2.66667C2.22464 16 1.80072 15.8244 1.48816 15.5118C1.17559 15.1993 1 14.7754 1 14.3333V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H6M11.8333 12.6667L16 8.5M16 8.5L11.8333 4.33333M16 8.5H6"
          stroke={isActive ? '#F04438' : '#667085'}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

//#F04438  #667085
