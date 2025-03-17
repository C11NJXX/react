import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import random from './utils/random'

export default function App() {
    const [dies, setDies] = useState(random().map((value, index) => <Die key={index} value={value} />));
    return (
        <main className="main-container">
            <div className='dies-container'>
                {dies}
            </div>
        </main>
    )
}