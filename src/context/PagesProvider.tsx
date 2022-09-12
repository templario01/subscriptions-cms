import React, { useState } from 'react'
import { PagesContext, PagesEnum } from './PagesContext'

type PagesProviderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const PagesProvider: React.FC<PagesProviderProps> = ({ children }) => {
  const [page, setPage] = useState<PagesEnum>(PagesEnum.INICIO)

  return <PagesContext.Provider value={{ page, setPage }}>{children}</PagesContext.Provider>
}
