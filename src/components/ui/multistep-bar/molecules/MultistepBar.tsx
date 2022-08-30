import React from 'react'

interface MultistepBarProps {
  status: 'active' | 'disabled'
}

export const MultistepBar: React.FC<MultistepBarProps> = ({ status }) => {
  return <div className={`${status === 'active' ? 'bg-ui-primary-600' : 'bg-ui-gray-300'} sm:w-16 h-multistep`}></div>
}
