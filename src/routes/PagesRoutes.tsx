import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AccountsPage } from '../components/pages/accounts/AccountsPage'
import { CustomersPage } from '../components/pages/customers/CustomersPage'
import { Homepage } from '../components/pages/Homepage/Homepage'
import { NotFound } from '../components/pages/not-found/NotFound'
import { PlatformsPage } from '../components/pages/platforms/PlatformsPage'
import { SettingsPage } from '../components/pages/settings/SettingsPage'

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/customers" element={<CustomersPage />}></Route>
      <Route path="/platforms" element={<PlatformsPage />}></Route>
      <Route path="/accounts" element={<AccountsPage />}></Route>
      <Route path="/settings" element={<SettingsPage />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  )
}
