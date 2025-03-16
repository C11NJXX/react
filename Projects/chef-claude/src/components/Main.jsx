import './css/Main.css'
import { useState, useRef, useEffect } from 'react'
import Recipe from './Recipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../utils/ai.js'
export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));

    function addIngredient(formData) {
        if (formData.get('ingredient')) {
            setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient')]);
        }
    }

    const [recipe, setRecipe] = useState('');
    async function getRecipe(ingredients) {
        const data = await getRecipeFromMistral(ingredients);
        setRecipe(data);
    }

    const recipeSection = useRef(null);
    useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView();
        }
    }, [recipe]);
    return (
        <main className='main-container'>
            <form className="add-bar" action={addIngredient}>
                <input className='add-bar-input' type='text' name="ingredient" placeholder="e.g. oregano" aria-label='Add ingredient' />
                <button className='add-bar-button'>Add ingredient</button>
            </form>
            {ingredientsListItems.length > 0 ? <IngredientsList ingredientsListItems={ingredientsListItems} getRecipe={getRecipe} ingredients={ingredients} ref={recipeSection} /> : null}
            {recipe ? <Recipe recipe={recipe} /> : null}
        </main>
    )
}