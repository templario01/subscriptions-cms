import React, { Fragment } from 'react'

interface StepCheckIconProps {
  status: 'active' | 'done' | 'disabled'
}

export const StepCheckIcon: React.FC<StepCheckIconProps> = ({ status }) => {
  const icon = () => {
    switch (status) {
      case 'active':
        return (
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.333" cy="16" r="15" stroke="#7F56D9" strokeWidth="2" />
            <circle cx="16.333" cy="16" r="5" fill="#7F56D9" />
          </svg>
        )
      case 'done':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#7F56D9" />
            <path
              d="M10.167 16.8335L13.5003 20.1668L21.8337 11.8335"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'disabled':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#D0D5DD" strokeWidth="2" />
          </svg>
        )
    }
  }
  return <>{icon()}</>
}
