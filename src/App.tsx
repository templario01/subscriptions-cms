import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/pages/login/Login'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
