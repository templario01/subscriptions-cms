import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthState } from '../../../context/AuthProvider'
import { Sidebar } from '../../ui/sidebar/Sidebar'

export const CmsContent = () => {
  const user = useAuthState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate('/login')
    }
  }, [])

  return (
    <Fragment>
      <Sidebar />
      <Outlet />
    </Fragment>
  )
}
