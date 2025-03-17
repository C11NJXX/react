import './App.css'
import Die from './components/Die'
import random from './utils/random'

export default function App() {
    const dies = random().map(value => <Die value={value} />);
    return (
        <main className="main-container">
            <div className='dies-container'>
                {dies}
            </div>
        </main>
    )
}