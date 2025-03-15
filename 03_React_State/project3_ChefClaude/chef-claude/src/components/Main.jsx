import './css/Main.css'
import { useState } from 'react'
export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    function addIngredient(formData) {
        setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient')]);
    }

    return (
        <main>
            <form className="add-bar" action={addIngredient}>
                <input className='add-bar-input' type='text' name="ingredient" placeholder="e.g. oregano" aria-label='Add ingredient' />
                <button className='add-bar-button'>Add ingredient</button>
            </form>
            {ingredientsListItems.length > 0 ?
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                    {ingredientsListItems.length >= 4 ?
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                        : null}
                </section>
                : null}
        </main>
    )
}