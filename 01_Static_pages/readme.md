在开始学习这个课程的时候，我在同步思考如何像之前那样组织学习的代码

因为这个课程它的小分段很多，然后前期的小分段很多都是概念性质的，没必要创建很多的代码

所以我决定先创建必要的文件夹，比如接下来要写一个小项目，那就为这个小项目创建一个react app

然后在这之前写的challenge代码，我就直接粘在下面了

```jsx
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<ul>
		<li>1.I want to find a jod</li>
		<li>2.I like learning something new</li>
		<li>3.React is beautiful</li>
	</ul>
);

-------------------------------------------declaritive----------

MyAwesomeNavbar.jsx

export function MyAwesomeNavbar() {
	return (
	<h1>React is great!<h1/>
	);
}

Main.jsx

import { myAwesomeNavBar } from 'MyAweSomeNavbar.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
	<>
	<myAwesomeNavBar />
	</>
);

-----------------------------------------imperative------------

const newElement = document.createElement('h1');
newElement.textContent = 'Hello';
//newElement.classList.add('header');
newElement.className = 'header'
document.getElementById('root').appendChild(newElement);


---------------------------------------------------------------
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<h1>Hello React!</h1>);

---------------------------------------------------------------- 


```