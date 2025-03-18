import Language from "./Language"
import languages from '../data/languages.js'
import { nanoid } from 'nanoid'
import './css/List.css'
export default function List() {
    const languageList = languages.map(language => <Language key={nanoid()} name={language.name} bgc={language.backgroundColor} color={language.color} />)
    return (
        <section className="language-list">
            {languageList}
        </section>
    )
}
