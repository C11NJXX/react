import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import random from './utils/random'

export default function App() {
    function mapRandomArr() {
        return random().map(obj => <Die key={obj.id} value={obj.value} isHeld={obj.isHeld}/>);
    }
    const [dies, setDies] = useState(mapRandomArr());

    return (
        <main className="main-container">
            <div className='dies-container'>
                {dies}
            </div>
            <button className='toll-button' onClick={() => {
                setDies(mapRandomArr())
            }}>
                Roll
            </button>
        </main>
    )
}