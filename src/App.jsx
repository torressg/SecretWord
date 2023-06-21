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

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

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
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    // check if letter has already been utilized
    if(
      guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
      ) {
        return;
      }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0) {
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // restart the game
  function retry() {
    setScore(0)
    setGuesses(3)

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
          pickedWord = {pickedWord}
          pickedCategory = {pickedCategory}
          letters = {letters}
          guessedLetters = {guessedLetters}
          wrongLetters = {wrongLetters}
          guesses = {guesses}
          score = {score}
        />}
      {gameStage === "end" &&
        <EndScreen
          click={retry}
          score={score}
        />}
    </div>
  )
}

export default App
