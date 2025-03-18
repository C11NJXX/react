import './css/NewGame.css'
export default function NewGame(props) {
    const { isGameOver } = props;
    return (
        isGameOver && <button className='new-game-button'>
            New Game
        </button>
    )
}
