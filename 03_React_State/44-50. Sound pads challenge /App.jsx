import pads from "./pads"
import { useState } from "react"
export default function App({ darkMode }) {
    const [buttons, setButtons] = useState(pads);
    const buttonItems = buttons.map(buttonItem => <button style={{
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }} key={buttonItem.id}></button>);

    return (
        <main>
            <div className="pad-container">
                {buttonItems}
            </div>
        </main>
    )
}
