import React, { ReactNode } from 'react'

interface ButtomProps {
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: (e?: any) => void
  children?: ReactNode
}

export const Buttom: React.FC<ButtomProps> = ({ description, handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      className="flex items-center text-center gap-1.5 justify-center rounded-lg w-full bg-ui-primary-700 text-white py-2.5 px-4 hover:bg-ui-primary-600"
    >
      {children}
      {description}
    </button>
  )
}
