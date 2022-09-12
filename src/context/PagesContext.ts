import { createContext } from 'react'

export enum PagesEnum {
  'INICIO' = 'Inicio',
  'CUENTAS' = 'Cuentas',
  'PLATAFORMAS' = 'Plataformas',
  'CLIENTES' = 'Clientes',
  'CONFIGURACION' = 'Configuración',
}

type PagesContextType = {
  page: PagesEnum
  setPage: React.Dispatch<React.SetStateAction<PagesEnum>>
}

export const PagesContext = createContext<PagesContextType | null>(null)
