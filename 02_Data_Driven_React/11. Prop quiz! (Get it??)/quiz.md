1. What do props help us accomplish?

pass data and reuse some components that need different 

2. How do you pass a prop into a component?

<Component ...:... ...:... />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
no it's not custom react component

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

function Navbar(props) {
    const {...} = props;
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?

object