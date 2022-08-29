import React, { Fragment } from 'react'

interface MultistepBarProps {
  steps: 'two' | 'four'
}

export const MultistepBar: React.FC<any> = ({ steps }) => {
  const stepBlock =
    steps === 'two' ? (
      <Fragment>
        <div className="h-multistep bg-ui-gray-300"></div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#D0D5DD" strokeWidth="2" />
        </svg>
      </Fragment>
    ) : (
      <Fragment>
        <div className="h-multistep bg-ui-gray-300"></div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#D0D5DD" strokeWidth="2" />
        </svg>
        <div className="h-multistep bg-ui-gray-300"></div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#D0D5DD" strokeWidth="2" />
        </svg>
      </Fragment>
    )

  return (
    <div className="flex flex-col w-full">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="#7F56D9" strokeWidth="2" />
        <circle cx="16" cy="16" r="5" fill="#7F56D9" />
        {stepBlock}
      </svg>
    </div>
  )
}
