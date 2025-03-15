import pads from "./pads"
import { useState } from "react"
import Pad from "./components/Pad";
export default function App({ darkMode }) {
    const [buttons, setButtons] = useState(pads);
    const buttonItems = buttons.map(
        buttonItem =>
            <Pad id={buttonItem.id} color={buttonItem.color} key={buttonItem.id} on={buttonItem.on} toggle={toggle} />);
    function toggle(id) {
        setButtons(prevButtons => {
            return prevButtons.map((prevButton) => {
                return (prevButton.id === id) ? { ...prevButton, on: !prevButton.on } : prevButton
            });
        });
    }
    return (
        <main>
            <div className="pad-container">
                {buttonItems}
            </div>
        </main>
    )
}
