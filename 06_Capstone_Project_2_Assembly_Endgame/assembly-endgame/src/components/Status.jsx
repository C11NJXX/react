import './css/Status.css'
import clsx from 'clsx';
import { getFarewellText } from '../data/farewell.js'
import languages from '../data/languages.js'
export default function Status(props) {
    const { isGameWon, isGameLost, isGameOver, isLatestLetterCorrect, currentLanguage, wrongGuess } = props;
    let eliminatedLanguages = 'Farewell ';
    for (let i = 0; i < wrongGuess; i++) {
        eliminatedLanguages += `${languages[i].name} `
    }
    console.log(eliminatedLanguages)
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
                    isLatestLetterCorrect ? `${eliminatedLanguages}🫡` : isLatestLetterCorrect === undefined ? `${eliminatedLanguages}🫡` : getFarewellText(currentLanguage.name)
                }
            </div>
        </section>
    )
}
