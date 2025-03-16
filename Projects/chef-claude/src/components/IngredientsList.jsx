import './css/IngredientsList.css'
export default function IngredientsList(props) {
    const {ingredientsListItems, getRecipe, ingredients, ref} = props;
    return (
        <section className='list-section'>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {ingredientsListItems.length >= 4 ?
                <div className="get-recipe-container" ref={ref}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={() => {
                        getRecipe(ingredients);
                    }}>Get a recipe</button>
                </div>
                : null}
        </section>
    )
}