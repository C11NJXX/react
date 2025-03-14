import Joke from "./components/Joke"
export default function App() {

    return (
        <main>
            <Joke setUp='I got my daughter a fridge for her birthday' punchline="I can't wait to see her face light up when she opens it" />
            <Joke setUp='How did the hacker escape the police?' punchline='He just ransomware!' />
            <Joke setUp="Why don't pirates travel on mountain roads?" punchline='Scurvy' />
            <Joke setUp='Why do bees stay in the hive in the winter?' punchline='Swarm.' />
            <Joke setUp=" What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" />
            <Joke punchline="I don't know, but the flag is a big plus!" />
        </main>
    )
}