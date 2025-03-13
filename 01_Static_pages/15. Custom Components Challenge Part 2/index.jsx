import ReactDOM from 'react-dom/client'
import reactIcon from './assets/React-Logo.png';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Page />
);


function Page() {
    return (
        <div>
            <header>
                <img src={reactIcon} alt="react-icon" />
            </header>
            <main>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>1.I want to find a jod</li>
                    <li>2.I like learning something new</li>
                    <li>3.React is beautiful</li>
                </ol>
            </main>
            <footer>
                <small>Copyright 20xx C_11nJxx development. All rights reserved.</small>
            </footer>
        </div>
    )
}