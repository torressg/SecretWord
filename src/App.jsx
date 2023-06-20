// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/wordsList'

// Components
import { StartScreen } from './components/StartScreen'
import { GameScreen } from './components/GameScreen'
import { EndScreen } from './components/EndScreen'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)


  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  function pickWordAndCategory() {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }

  // start the game
  function handleStart() {
    // pick word and pick category
    const {word, category} = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.toLowerCase()
    wordLetters = wordLetters.split("")
    
    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    // game screen
    setGameStage(stages[1].name)
  }

  // input of letters
  function verifyLetter() {
    setGameStage(stages[2].name)
  }

  // restart the game
  function retry() {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === "start" &&
        <StartScreen
          click={handleStart}
        />}
      {gameStage === "game" &&
        <GameScreen
          click={verifyLetter}
        />}
      {gameStage === "end" &&
        <EndScreen
          click={retry}
        />}
    </div>
  )
}

export default App
