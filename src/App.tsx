import React from 'react'
import './App.css'
import { MultistepBar } from './components/ui/multistep-bar/MultistepProgressBar'

function App() {
  return (
    <div className="App">
      <MultistepBar size={'large'} phase={'100%'} />
      <MultistepBar size={'small'} phase={'100%'} />
    </div>
  )
}

export default App
