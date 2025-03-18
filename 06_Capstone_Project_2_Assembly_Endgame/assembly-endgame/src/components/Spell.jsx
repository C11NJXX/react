import { useState } from "react"
import { nanoid } from "nanoid";
import './css/Spell.css'
export default function Spell() {
    const [currentWord, setCurrentWord] = useState('react');
    const currentWordArray = currentWord.split('');
    const currentWordElement = currentWordArray.map(letter => (
        <span key={nanoid()} style={{
            width: '60px',
            height: '60px',
            padding: '8px',
            paddingTop:'15px',
            backgroundColor: '#323232',
            fontSize:'30px',
            marginRight:'3px',
            borderBottom: ' 1px solid #F9F4DA',
            borderBottomWidth: '1px'
        }}>
            {letter}
        </span >
    ));

    return (
        <div className="spell-container">
            {currentWordElement}
        </div>
    )
}
