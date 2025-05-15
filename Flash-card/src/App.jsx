import { useState } from 'react'
import Flashcard from './Card/Flashcard'
import CardInfo from './CardInfo.jsx'

function App() {

  return( 
  <>  
    <h1>Vite + React</h1>

    <CardInfo/>
    <Flashcard/>
    <Flashcard/><Flashcard/>
  
    </>
  );
}

export default App
