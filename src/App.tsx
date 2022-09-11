import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/pages/Homepage/Homepage'
import { Login } from './components/pages/login/Login'


function App() {
  return (
    <div className="App bg-ui-base-white">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
