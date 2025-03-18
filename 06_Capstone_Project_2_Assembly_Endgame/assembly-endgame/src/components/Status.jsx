import './css/Status.css'
import clsx from 'clsx';
export default function Status(props) {
    const { isGameWon, isGameLost } = props;
    return (
        <section className='status-container'>
            <div className={`status-color ${clsx({ ['status-color-won']: isGameWon, ['status-color-lost']: isGameLost })}`}>
                <p className='status-result'>{isGameWon ? 'You Win!' : isGameLost ? 'Game over!' : ''}</p>
                <p className='status-result-text'>{isGameWon ? 'Well done🎉' : isGameLost ? 'You lose!Better start learning Assembly🥰' : ''}</p>
            </div>
        </section>
    )
}
