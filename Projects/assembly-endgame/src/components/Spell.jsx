import { nanoid } from "nanoid";
import clsx from "clsx";
import './css/Spell.css'
export default function Spell(props) {
    const { currentWord, guessedLetters, isGameLost } = props;
    console.log(currentWord)
    const currentWordArray = currentWord.split('');
    const currentWordElement = currentWordArray.map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const className = clsx({ ['spell-correct']: isCorrect, ['spell-wrong']: (isGameLost && !isCorrect) })
        return (
            isGameLost ?
                isCorrect ? <span key={nanoid()} className={`spell-base ${className}`}>
                    {letter}
                </span > : <span key={nanoid()} className={`spell-base ${className}`}>
                    {letter}
                </span >
                : <span key={nanoid()} className={`spell-base ${className}`}>
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
