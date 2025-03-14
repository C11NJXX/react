import marker from '../assets/marker.png'


import './css/Entry.css'
export default function Entry(props) {
    const { img, country, googleMapsLink, title, dates, text } = props.item;
    const { src, alt } = img;
    return (
        <article className='japan-content'>
            <img src={src} alt={alt} className='fuji-img' />
            <div className='main-content'>
                <div className='main-content-1'>
                    <img src={marker} alt="marker" className='marker-img' />
                    <span>{country}</span>
                    <a href={googleMapsLink}>View on Google Maps</a>
                </div>
                <p className='main-content-2'>
                    {title}
                </p>
                <p className='main-content-3'>
                    <span>{dates}</span>
                    {text}
                </p>
            </div>
        </article>
    )
}