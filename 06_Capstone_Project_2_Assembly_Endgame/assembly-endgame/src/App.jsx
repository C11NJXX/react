import { useState } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import List from './components/List'
import Spell from "./components/Spell"
import KeyBoard from "./components/KeyBoard"
import NewGame from "./components/NewGame"
import './App.css'
export default function Hangman() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  function addGuessedLetter(letter) {
    setGuessedLetters(prev => (prev.includes(letter) ? prev : [...prev, letter]))
  }
  return (
    <main className="main-container">
      <Header />
      <Status />
      <List />
      <Spell />
      <KeyBoard addGuessedLetter={addGuessedLetter} />
      <NewGame />
    </main>
  )
}
