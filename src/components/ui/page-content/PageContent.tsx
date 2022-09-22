import React from 'react'

interface PageContentProps {
  children?: React.ReactNode
}

export const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <div className="ml-76 w-full ">{children}</div>
}
