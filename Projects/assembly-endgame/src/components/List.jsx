import Language from "./Language"
import languages from '../data/languages.js'
import { nanoid } from 'nanoid'
import './css/List.css'
export default function List(props) {
    const { wrongGuess } = props;
    const languageList = languages.map((language, index) => {
        return (
            <Language
                key={nanoid()}
                name={language.name}
                bgc={language.backgroundColor}
                color={language.color}
                isEliminate={index < wrongGuess ? true : false}
            />
        )
    })
    return (
        <section className="language-list">
            {languageList}
        </section>
    )
}
