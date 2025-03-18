import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import List from './components/List'
import './App.css'
export default function Hangman() {
  return (
    <main className="main-container">
      <Header />
      <Status />
      <List />
    </main>
  )
}
