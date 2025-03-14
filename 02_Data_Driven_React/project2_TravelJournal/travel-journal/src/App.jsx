import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'

import data from './data/data.js'
export default function App() {
    const items = data.map((item) => {
        const { id }= item;
        return (<Entry
            key={id}
            {...item}
        />)
    });
    return (
        <>
            <Header />
            <main className="container">
                {items}
            </main>
        </>
    )
}