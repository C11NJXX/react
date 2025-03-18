import './css/NewGame.css'
import getRandomWord from '../data/words.js'
export default function NewGame(props) {
    const { isGameOver, setCurrentWord, setGuessedLetters } = props;
    function NewGame() {
        setCurrentWord(getRandomWord);
        setGuessedLetters([]);
    }
    return (
        isGameOver && <button
            className='new-game-button'
            onClick={NewGame}
        >
            New Game
        </button>
    )
}
