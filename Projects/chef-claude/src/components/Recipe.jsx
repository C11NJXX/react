import './css/Recipe.css'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function Recipe(props) {
    const { recipe } = props
    return (
        <section className='recommend-section suggested-recipe-container' aria-live='polite'>
            <h2>Chef Claude Recommends</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{recipe}</Markdown>
        </section>
    )
}
