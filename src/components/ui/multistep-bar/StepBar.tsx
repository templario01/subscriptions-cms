import React from 'react'

interface StepBarProps {
  status: 'active' | 'disabled'
}

export const StepBar: React.FC<StepBarProps> = ({ status }) => {
  return <div className={`${status === 'active' ? 'bg-ui-primary-600' : 'bg-ui-gray-300'} w-100 h-multistep`}></div>
}
