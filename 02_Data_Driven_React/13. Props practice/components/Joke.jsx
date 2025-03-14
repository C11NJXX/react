export default function Joke(props) {
    const { setUp, punchline } = props;
    return (
        <section>
            <p>{setUp ? `Setup: ${setUp}` : ''}</p>
            <p>Punchline: {punchline}</p>
            <hr />
        </section>
    )
}