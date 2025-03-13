1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
```
inside (...)
```

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```

```
Uncaught SyntaxError: Unexpected token '<'
sorry that's the result in devtool

in jsx it is an obj
```

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

```
can't render two element, you need to warp them into one parent element
```

4. What does it mean for something to be "declarative" instead of "imperative"?

```
just tell them what to do, they will figure it out
```

5. What does it mean for something to be "composable"?

```
you can integrate your code and reuse them

we have small pieces that we can put together to make something larger or greater
than the individual pieces themselves.
```