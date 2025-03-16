import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    /**
     * Challenge part 1:
     * Fetch the data from this url: "https://swapi.dev/api/people/1"
     * and save it in the starWarsData state. Make sure you don't
     * get stuck in an infinite rendering loop!
     */
    // React.useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/${count}`)
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [count]);

    React.useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://swapi.dev/api/people/${count}`);
            const data = await res.json();
            setStarWarsData(data);
        }
        fetchData()
    }, [count]);

    return (
        <div>
            <h2>The character is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}