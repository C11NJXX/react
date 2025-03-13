import reactIcon from '../assets/React-Logo.png';

export default function Header() {
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