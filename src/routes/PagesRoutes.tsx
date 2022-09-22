import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AccountsPage } from '../components/pages/accounts/AccountsPage'
import { CmsContent } from '../components/pages/cms-content/CmsContent'
import { CustomersPage } from '../components/pages/customers/CustomersPage'
import { Homepage } from '../components/pages/Homepage/Homepage'
import { Login } from '../components/pages/login/Login'
import { NotFound } from '../components/pages/not-found/NotFound'
import { PlatformsPage } from '../components/pages/platforms/PlatformsPage'
import { Register } from '../components/pages/register/Register'
import { SettingsPage } from '../components/pages/settings/SettingsPage'

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login/" element={<Login />}></Route>
      <Route path="/register/" element={<Register />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
      <Route path="/cms/" element={<Navigate to="/cms/home" />}></Route>
      <Route path="/cms/" element={<CmsContent />}>
        <Route path="home" element={<Homepage />}></Route>
        <Route path="customers" element={<CustomersPage />}></Route>
        <Route path="platforms" element={<PlatformsPage />}></Route>
        <Route path="accounts" element={<AccountsPage />}></Route>
        <Route path="settings" element={<SettingsPage />}></Route>
      </Route>
    </Routes>
  )
}
