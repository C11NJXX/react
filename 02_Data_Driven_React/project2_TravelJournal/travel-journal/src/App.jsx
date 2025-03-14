import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'

import data from './data/data.js'
export default function App() {
    const items = data.map((item) => {
        const { id, img, title, country, googleMapsLink, dates, text } = item;
        return (<Entry
            key={id}
            img={img}
            country={country}
            googleMapsLink={googleMapsLink}
            title={title}
            dates={dates}
            text={text}
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