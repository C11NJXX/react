import pads from "./pads"
import { useState } from "react"
import Pad from "./components/Pad";
export default function App({ darkMode }) {
    const [buttons, setButtons] = useState(pads);
    const buttonItems = buttons.map(
        buttonItem =>
            <Pad color={buttonItem.color} key={buttonItem.id} on={buttonItem.on}/>);

    return (
        <main>
            <div className="pad-container">
                {buttonItems}
            </div>
        </main>
    )
}
