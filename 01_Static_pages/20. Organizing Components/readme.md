```jsx
为什么要使用'className'而不是'class'？
原因在于 'react component' 在渲染的时候
底层调用的是 document.createElement()
在创建了'element'之后
使用 'element.className' 去设置它的'class'
所以要使用'className'
```