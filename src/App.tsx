import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { Sidebar } from './components/ui/sidebar/Sidebar'
import { PagesRoutes } from './routes/PagesRoutes'

function App() {
  return (
    <Router>
      <div className="App bg-ui-gray-25">
        <div className="flex">
          <div className="h-full w-60">
            <Sidebar />
          </div>
          <PagesRoutes />
        </div>
      </div>
    </Router>
  )
}

export default App
