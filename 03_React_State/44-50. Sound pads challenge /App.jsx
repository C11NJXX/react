import pads from "./pads"
import { useState } from "react"
export default function App() {
    const [buttons, setButtons] = useState(pads);
    const buttonItems = buttons.map(buttonItem => <button key={buttonItem.id}>{buttonItem.id}</button>);

    return (
        <main>
            <div className="pad-container">
                {buttonItems}
            </div>
        </main>
    )
}
