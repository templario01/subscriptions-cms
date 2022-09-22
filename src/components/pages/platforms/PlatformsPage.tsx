import React from 'react'
import { PageContent } from '../../ui/page-content/PageContent'
import { RowPlatformTable } from '../../ui/table/rows/RowPlatformTable'
import { TableHeader } from '../../ui/table/header/TableHeader'
import { Modal } from '../../ui/modal/Modal'

export const PlatformsPage = () => {
  const platformTitles = ['plataforma', 'precio base', 'numero de cuentas', 'accion']
  return (
    <PageContent>
      <div className="h-full sm:px-8">
        <div className="shadow-md bg-white rounded-sm w-full ">
          <table className="min-w-full leading-normal">
            <TableHeader elements={platformTitles} />
            <tbody>
              <RowPlatformTable />
              <RowPlatformTable />
              <RowPlatformTable />
            </tbody>
          </table>
        </div>
      </div>
      <Modal/>
    </PageContent>
  )
}