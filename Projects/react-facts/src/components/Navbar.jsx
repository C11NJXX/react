import reactIcon from '../assets/React-Logo.png';
import './css/Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <img src={reactIcon} alt='react-logo' className='react-logo'/>
                <span className='nav-title'>ReactFacts</span>
            </nav>
        </header>
    )
}