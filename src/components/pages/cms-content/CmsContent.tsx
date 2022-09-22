import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../ui/sidebar/Sidebar'

export const CmsContent = () => {
  return (
    <Fragment>
      <Sidebar />
      <Outlet />
    </Fragment>
  )
}
