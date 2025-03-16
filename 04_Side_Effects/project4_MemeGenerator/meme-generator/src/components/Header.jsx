import trollFace from "../assets/images/troll-face.png"
import './css/Header.css'
export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}