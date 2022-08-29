import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MultistepBar } from './components/ui/MultistepBar'

function App() {
  return (
    <div className="App">
      <MultistepBar steps='two'/>
    </div>
  )
}

export default App
