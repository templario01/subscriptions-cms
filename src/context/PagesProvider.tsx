import React, { useState } from 'react'
import { PagesContext, PagesEnum } from './PagesContext'

type PagesProviderProps = {
  children?: React.ReactNode
}

export const PagesProvider: React.FC<PagesProviderProps> = ({ children }) => {
  const [page, setPage] = useState<PagesEnum>(PagesEnum.INICIO)

  return <PagesContext.Provider value={{ page, setPage }}>{children}</PagesContext.Provider>
}
