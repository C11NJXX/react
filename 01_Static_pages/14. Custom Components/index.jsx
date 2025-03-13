//Challenge Part1
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
    <Page />
);

function Page() {
    return (
        <div>
            <ol>
                <li>1.I want to find a jod</li>
                <li>2.I like learning something new</li>
                <li>3.React is beautiful</li>
            </ol>
        </div>
    )
}