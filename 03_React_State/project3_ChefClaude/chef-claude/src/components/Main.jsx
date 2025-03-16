import './css/Main.css'
import { useState } from 'react'
import Recipe from './Recipe';
import IngredientsList from './IngredientsList';
export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    function addIngredient(formData) {
        if (formData.get('ingredient')) {
            setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient')]);
        }
    }

    const [recipeShown, setRecipeShown] = useState(false);
    function getRecipe() {
        setRecipeShown(prev => !prev);
    }
    return (
        <main className='main-container'>
            <form className="add-bar" action={addIngredient}>
                <input className='add-bar-input' type='text' name="ingredient" placeholder="e.g. oregano" aria-label='Add ingredient' />
                <button className='add-bar-button'>Add ingredient</button>
            </form>
            {ingredientsListItems.length > 0 ? <IngredientsList ingredientsListItems={ingredientsListItems} getRecipe={getRecipe}/> : null}
            {recipeShown ? <Recipe /> : null}
        </main>
    )
}