import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import random, { randomNumber } from './utils/random'

export default function App() {
    const [dies, setDies] = useState(random());
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
    return (
        <main className="main-container">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dies-container'>
                {diceElements}
            </div>
            <button className='toll-button' onClick={roll}>
                Roll
            </button>
        </main>
    )
}