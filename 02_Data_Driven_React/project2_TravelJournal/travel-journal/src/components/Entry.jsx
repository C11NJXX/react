import marker from '../assets/marker.png'
import fuji from '../assets/imgs/fuji.png'

import './css/Entry.css'
export default function Entry() {
    return (
        <article className='japan-content'>
            <img src={fuji} alt="mount-fuji" className='fuji-img' />
            <div className='main-content'>
                <div className='main-content-1'>
                    <img src={marker} alt="marker" className='marker-img' />
                    <span>JAPAN</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <p className='main-content-2'>
                    Mount Fuji
                </p>
                <p className='main-content-3'>
                    <span>12 Jan, 2021 - 24 Jan, 2021</span>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}