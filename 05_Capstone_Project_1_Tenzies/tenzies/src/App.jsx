import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import random from './utils/random'

export default function App() {
    const [dies, setDies] = useState(random());
    const diceElements = dies.map((die) => {
        return <Die key={die.id} value={die.value} isHeld={die.isHeld}/>
    });
    return (
        <main className="main-container">
            <div className='dies-container'>
                {diceElements}
            </div>
            <button className='toll-button' onClick={() => {
                setDies(random())
            }}>
                Roll
            </button>
        </main>
    )
}