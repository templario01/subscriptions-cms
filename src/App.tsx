import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { RegisterProvider } from './context/RegisterProvider'
import { PagesRoutes } from './routes/PagesRoutes'

function App() {
  return (
    <RegisterProvider>
      <Router>
        <div className="App bg-ui-gray-25">
          <div className="flex h-full">
            <PagesRoutes />
          </div>
        </div>
      </Router>
    </RegisterProvider>
  )
}

export default App
