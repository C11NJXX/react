import icon from '../assets/images/chef-claude-icon.png'
import './css/Header.css'
export default function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <img src={icon} alt="chef-icon" className='header-icon' />
                <span className='header-title'>Chef Claude</span>
            </div>
        </header>
    )
}