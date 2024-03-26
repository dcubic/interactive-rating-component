import { useState } from 'react'
import './App.css'
import SelectionWindow from './components/SelectionWindow/SelectionWindow'
import ThankYouWindow from './components/ThankYouWindow/ThankYouWindow'

function App() {
  const [ratingState, setRatingState] = useState(undefined);
  const [hasSubmittedState, setHasSubmittedState] = useState(false);
  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <body>
      {hasSubmittedState ? <></> : <SelectionWindow ratingValues = {ratingValues} ratingState={ratingState} setRatingState={setRatingState} setHasSubmittedState={setHasSubmittedState}/>}
      {!hasSubmittedState ? <></> : <ThankYouWindow ratingState={ratingState} />}
    </body>
  )
}

export default App
