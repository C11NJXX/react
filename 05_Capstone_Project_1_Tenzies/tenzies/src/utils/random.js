import { nanoid } from 'nanoid'

export default function random() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
        randomArr.push({
            id: nanoid(),
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false
        });
    }
    return randomArr;
}