1. What is a React component?

```
It looks like a tag, we can use function to return some html
```

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

```
myComponent => use PascalCase MyComponent
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

```
root.render(<Header />);
```