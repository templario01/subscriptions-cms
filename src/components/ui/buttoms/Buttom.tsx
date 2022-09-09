import React from 'react'

interface ButtomProps {
  description: string
  handleClick?: () => void
}

export const Buttom: React.FC<ButtomProps> = ({ description, handleClick }) => {
  return (
    <button onClick={handleClick} type="submit" className="rounded-lg w-full bg-ui-primary-600 text-white py-2.5 px-4 hover:bg-ui-primary-500">
      {description}
    </button>
  )
}
