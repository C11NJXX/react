import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import List from './components/List'
import Spell from "./components/Spell"
import KeyBoard from "./components/KeyBoard"
import NewGame from "./components/NewGame"
import './App.css'

import languages from './data/languages.js'
import getRandomWord from './data/words.js'

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
export default function App() {
  //StateValue
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived values
  const wrongGuess = guessedLetters.filter(guessedLetter => !currentWord.includes(guessedLetter)).length;
  const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuess <= 7 ? false : true;
  const isGameOver = isGameWon || isGameLost;
  const isLatestLetterCorrect = guessedLetters[guessedLetters.length - 1] && currentWord.includes(guessedLetters[guessedLetters.length - 1]);

  const { width, height } = useWindowSize();
  function addGuessedLetter(letter) {
    setGuessedLetters(prev => (prev.includes(letter) ? prev : [...prev, letter]))
  }
  return (
    <main className="main-container">
      {isGameWon ? <Confetti
        width={width}
        height={height}
      /> : undefined}
      <Header />
      <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver} isLatestLetterCorrect={isLatestLetterCorrect} currentLanguage={languages[wrongGuess - 1]} wrongGuess={wrongGuess} />
      <List wrongGuess={wrongGuess} />
      <Spell currentWord={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost} />
      <KeyBoard currentWord={currentWord} guessedLetters={guessedLetters} addGuessedLetter={addGuessedLetter} isGameOver={isGameOver} />
      <NewGame isGameOver={isGameOver} setCurrentWord={setCurrentWord} setGuessedLetters={setGuessedLetters} />
    </main>
  )
}
