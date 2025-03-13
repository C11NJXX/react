```
如果不用div标签包裹
react有一个built-in-component
Fragment
```


```jsx
import ReactDOM from 'react-dom/client'
import reactIcon from './assets/React-Logo.png';

import Fragment from 'react'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Page />
);


function Page() {
    return (
        <Fragment>
            <header>
                <img src={reactIcon} alt="react-icon" />
            </header>
            <main>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>1.I want to find a jod</li>
                    <li>2.I like learning something new</li>
                    <li>3.React is beautiful</li>
                </ol>
            </main>
            <footer>
                <small>Copyright 20xx C_11nJxx development. All rights reserved.</small>
            </footer>
        </Fragment>
    )
}
```

```jsx
但是很多代码是这样写的
return(
    <>
        ...
    </>
)
这是一个语法糖?底层其实就是使用了Fragment
Fragment可以让渲染的时候不额外渲染节点，解决了一些因为多一个父节点带来的麻烦
```