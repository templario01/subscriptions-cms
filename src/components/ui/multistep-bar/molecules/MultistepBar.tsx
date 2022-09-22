import React from 'react'

interface MultistepBarProps {
  status: 'active' | 'disabled'
}

export const MultistepBar: React.FC<MultistepBarProps> = ({ status }) => {
  return <div className={`${status === 'active' ? 'bg-ui-primary-600' : 'bg-ui-gray-300'} w-full h-multistep transition ease-out delay-150`}></div>
}
