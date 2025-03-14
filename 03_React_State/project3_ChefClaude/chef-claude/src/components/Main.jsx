import './css/Main.css'
export default function Main() {
    return(
        <main>
            <form className="add-bar">
                <input className='add-bar-input' type='text' placeholder="e.g. oregano" aria-label='Add ingredient'/>
                <button className='add-bar-button'>Add ingredient</button>
            </form>
        </main>
    )
}