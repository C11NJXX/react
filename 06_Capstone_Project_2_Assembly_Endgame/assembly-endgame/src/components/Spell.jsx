import { nanoid } from "nanoid";
import './css/Spell.css'
export default function Spell(props) {
    const { currentWord, guessedLetters } = props;
    const currentWordArray = currentWord.split('');
    const currentWordElement = currentWordArray.map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        return (
            <span key={nanoid()} style={{
                width: '60px',
                height: '60px',
                padding: '8px',
                paddingTop: '15px',
                backgroundColor: '#323232',
                fontSize: '30px',
                marginRight: '3px',
                borderBottom: ' 1px solid #F9F4DA',
                borderBottomWidth: '1px'
            }}>
                {isCorrect ? letter : ''}
            </span >
        )
    });

    return (
        <div className="spell-container">
            {currentWordElement}
        </div>
    )
}
