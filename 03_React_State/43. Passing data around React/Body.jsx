export default function Body(props) {
    const { userName } = props;
    return (
        <section>
            <h1>Welcome back, {userName}!</h1>
        </section>
    )
}