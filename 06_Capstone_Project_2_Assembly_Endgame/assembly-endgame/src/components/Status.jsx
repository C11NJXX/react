import './css/Status.css'
import clsx from 'clsx';
import { getFarewellText } from '../data/farewell.js'
export default function Status(props) {
    const { isGameWon, isGameLost, isGameOver, isLatestLetterCorrect, currentLanguage } = props;
    return (
        <section className='status-container'>
            <div className={`status-color ${clsx({ ['status-color-won']: isGameWon, ['status-color-lost']: isGameLost })}`}>
                {isGameOver
                    ?
                    <>
                        <p className='status-result'>{isGameWon ? 'You Win!' : isGameLost ? 'Game over!' : ''}</p>
                        <p className='status-result-text'>{isGameWon ? 'Well done🎉' : isGameLost ? 'You lose!Better start learning Assembly🥰' : ''}</p>
                    </>
                    :
                    isLatestLetterCorrect ? 'Farewell HTML & CSS🫡' : isLatestLetterCorrect === undefined ? 'Farewell HTML & CSS🫡' : getFarewellText(currentLanguage.name)
                }
            </div>
        </section>
    )
}
