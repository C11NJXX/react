import marker from '../assets/marker.png'


import './css/Entry.css'
export default function Entry(props) {
    const { img, name, googleLink, title, content } = props;
    const { url, alt } = img;
    const { date, main } = content;
    return (
        <article className='japan-content'>
            <img src={url} alt={alt} className='fuji-img' />
            <div className='main-content'>
                <div className='main-content-1'>
                    <img src={marker} alt="marker" className='marker-img' />
                    <span>{name}</span>
                    <a href={googleLink}>View on Google Maps</a>
                </div>
                <p className='main-content-2'>
                    {title}
                </p>
                <p className='main-content-3'>
                    <span>{date}</span>
                    {main}
                </p>
            </div>
        </article>
    )
}