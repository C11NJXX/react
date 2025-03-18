import './css/KeyBoard.css'
import { clsx } from 'clsx';
export default function KeyBoard(props) {

    const { currentWord, guessedLetters, addGuessedLetter, isGameOver } = props;
    const keyBoardLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const keyBoardLettersArray = keyBoardLetters.split('');



    const keyBoardElement = keyBoardLettersArray.map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);
        const className = clsx({
            ['keyboard-correct']: isCorrect,
            ['keyboard-wrong']: isWrong
        })
        return (
            <button
                key={letter}
                className={`keyboard-plain ${className}`}
                onClick={() => {
                    !isGameOver && addGuessedLetter(letter)
                }}
            >
                {letter}
            </button >
        )
    });
    return (
        <section className="keyboard-container">
            {keyBoardElement}
        </section>
    )
}
