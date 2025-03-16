import './css/Recipe.css'
export default function Recipe(props) {
    const { recipe } = props
    return (
        <section>
            {recipe}
        </section>
    )
}
