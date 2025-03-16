import './css/Main.css'
import { useState, useEffect } from 'react'
export default function Main() {
    const [meme, setMeme] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    });

    const [memes, setMemes] = useState([]);
    useEffect(() => {
        try {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMemes(data.data.memes))
        } catch (error) {
            console.log(error);
        }
    }, []);
    function getMeme() {
        const randomIndex = Math.floor(Math.random() * (memes.length)) + 1;
        const randomMemeImgUrl = memes[randomIndex].url;
        setMeme(prevMeme => ({ ...prevMeme, imageUrl: randomMemeImgUrl }))
    }
    function handleChange(event) {
        const { value, name } = event.currentTarget;
        setMeme(prevMeme => ({ ...prevMeme, [name]: value }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}