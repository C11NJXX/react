import { useState } from "react"
export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(prev => [...prev, allFavoriteThings[myFavoriteThings.length]]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}