import React from 'react'
import './App.css'
import { StepCheckIcon } from './components/ui/multistep-bar/StepCheckIcon'
import { StepBar } from './components/ui/multistep-bar/StepBar'
import { MultistepBar } from './components/ui/multistep-bar/MultistepBar'

function App() {
  return (
    <div className="App">
      <MultistepBar steps={2} />
    </div>
  )
}

export default App
