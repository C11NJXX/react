import './css/Main.css'
import { useState } from 'react'
export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const ingredientListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    function addIngredient(formData) {
        setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient')]);
    }

    return (
        <main>
            <form className="add-bar" action={addIngredient}>
                <input className='add-bar-input' type='text' name="ingredient" placeholder="e.g. oregano" aria-label='Add ingredient' />
                <button className='add-bar-button'>Add ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}