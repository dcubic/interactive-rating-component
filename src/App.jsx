import { useState } from 'react'
import './App.css'
import SelectionWindow from './components/SelectionWindow/SelectionWindow'
import ThankYouWindow from './components/ThankYouWindow/ThankYouWindow'

function App() {
  return (
    <body>
      <SelectionWindow />
      <ThankYouWindow />
    </body>
  )
}

export default App
