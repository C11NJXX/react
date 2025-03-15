import { useState } from "react"
export default function Pad({ color, on }) {
    const [isOn, setIsOn] = useState(on);
    function handleClick() {
        setIsOn(prev => !prev);
    }
    return (
        <button
            style={{
                backgroundColor: color
            }}
            className={isOn ? 'on' : undefined} 
            onClick={handleClick}>
        </button>
    )
}
