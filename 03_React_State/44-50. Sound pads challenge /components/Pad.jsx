import { useState } from "react"
export default function Pad({ color, on, toggle }) {
    const [isOn, setIsOn] = useState(on);
    
    return (
        <button
            style={{
                backgroundColor: color
            }}
            className={isOn ? 'on' : undefined}
            onClick={toggle}>
        </button>
    )
}
