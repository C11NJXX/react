import reactIcon from '../assets/React-Logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={reactIcon} alt='react-logo' />
            <span>ReactFacts</span>
        </nav>
    )
}