import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import List from './components/List'
import Spell from "./components/Spell"
import KeyBoard from "./components/KeyBoard"
import NewGame from "./components/NewGame"
import './App.css'
export default function App() {
  //StateValue
  const [currentWord, setCurrentWord] = useState('REACT');
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived values
  const wrongGuess = guessedLetters.filter(guessedLetter => !currentWord.includes(guessedLetter)).length;
  const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuess <= 7 ? false : true;
  const isGameOver = isGameWon || isGameLost;
  function addGuessedLetter(letter) {
    setGuessedLetters(prev => (prev.includes(letter) ? prev : [...prev, letter]))
  }
  return (
    <main className="main-container">
      <Header />
      <Status isGameWon={isGameWon} isGameLost={isGameLost} />
      <List wrongGuess={wrongGuess} />
      <Spell currentWord={currentWord} guessedLetters={guessedLetters} />
      <KeyBoard currentWord={currentWord} guessedLetters={guessedLetters} addGuessedLetter={addGuessedLetter} />
      <NewGame isGameOver={isGameOver} />
    </main>
  )
}
