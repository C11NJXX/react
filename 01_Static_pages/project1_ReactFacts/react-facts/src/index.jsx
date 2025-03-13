import { createRoot } from 'react-dom/client';
import reactIcon from './assets/React-Logo.png';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <main>
        <img src={reactIcon} alt='react-logo'/>
        <h1>Fun facts about</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
);

// console.log(<h1>Hi</h1>);