import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

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