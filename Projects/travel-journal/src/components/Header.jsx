import globalIcon from '../assets/global.png'
import './css/Header.css'
export default function Header() {
    return (
        <header className='nav-bar'>
            <img src={globalIcon} alt="global-icon" />
            <span className='nav-title'>my travel journal</span>
        </header>
    )
}