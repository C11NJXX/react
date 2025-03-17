import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import random, { randomNumber } from './utils/random'

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function App() {
    const [dies, setDies] = useState(random);
    let gameWon = dies.every(die => die.isHeld) && dies.every(die => die.value === dies[0].value);
    function hold(id) {
        setDies(oldDies => oldDies.map(oldDie => oldDie.id === id ? { ...oldDie, isHeld: !oldDie.isHeld } : oldDie));
    }

    function roll() {
        setDies(oldDies => oldDies.map(oldDie => oldDie.isHeld === false ? { ...oldDie, value: randomNumber() } : oldDie));
    }

    const diceElements = dies.map((die) => {
        return <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            hold={() => {
                hold(die.id)
            }} />
    });

    const { width, height } = useWindowSize()

    return (
        <main className="main-container">
            {gameWon ? <Confetti
                width={width}
                height={height}
            /> : null}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dies-container'>
                {diceElements}
            </div>
            <button className='toll-button' onClick={roll}>
                {gameWon ? 'New Game' : 'Roll'}
            </button>
        </main>
    )
}