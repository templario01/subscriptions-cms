import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { PagesRoutes } from './routes/PagesRoutes'

function App() {
  return (
    <Router>
      <div className="App bg-ui-gray-25">
        <div className="flex h-full">
          <PagesRoutes />
        </div>
      </div>
    </Router>
  )
}

export default App
