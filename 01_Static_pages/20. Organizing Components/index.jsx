import ReactDOM from 'react-dom/client'
import reactIcon from './assets/React-Logo.png';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Page />
);


function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

function Header() {
    return (
        <header className='header'>
            <img src={reactIcon} alt="react-icon" className='nav-logo' />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Main() {
    return (
        <main className='main-content'>
            <h1 className='main-header'>Reasons I'm excited to learn React</h1>
            <ol className='main-list'>
                <li>I want to find a jod</li>
                <li>I like learning something new</li>
                <li>React is beautiful</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer className='footer'>
            <small>Copyright 20xx C_11nJxx development. All rights reserved.</small>
        </footer>
    )
}