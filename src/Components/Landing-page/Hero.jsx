import PlayIcon from '../../Images/landing-page/play-icon.png'
import Student1 from '../../Images/landing-page/Group453.png'

export default function Hero() {
    return (
        <>
           <div className="hero-section">
                <div className="hero-section1">
                    <h2><span className='yellow-text'>Studying</span> Online is now much easier</h2>
                    <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                    <div>
                        <button className='join'>Join for free</button>
                        
                        <img src={PlayIcon} alt="play button" className='play-btn'/>
                        <p>Watch how it works</p>
                    </div>
                </div>
                <div className="hero-section2">
                    <img src={Student1} alt="" />
                </div>
            </div>
        </>
    )
}