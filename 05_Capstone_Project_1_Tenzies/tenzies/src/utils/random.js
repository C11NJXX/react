export default function random() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
        randomArr.push(Math.floor(Math.random() * 6) + 1);
    }
    return randomArr;
}