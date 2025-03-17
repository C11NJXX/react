import './App.css'
import Die from './components/Die'
export default function App() {
    return (
        <main className="main-container">
            <div className='dies-container'>
                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>

                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>
                <Die value={1}></Die>
            </div>
        </main>
    )
}