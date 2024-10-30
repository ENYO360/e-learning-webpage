// This is the contents for LATEST NEWS section of the Landing page
import NewsCard1 from '../../Images/landing-page/news-card-1.png'
import { LATESTNEWSARRAY } from './LatestNewsData'


export default function LatestNews() {
    return (
        <>
            <div className='latest-news-container'>
                <div>
                    <h3>Lastest News and Resources</h3>
                    <p className='see'>See the developments that have occurred to TOTC in the world</p>
                </div>
                <div className='news-container'>
                    <div>
                        <img className='news-card1' src={NewsCard1} alt="News card1" />
                        <h4 className='first-news'>NEWS</h4>
                        <h4 className='class-adds'>Class adds $30 million to its balance sheet for<br /> a Zoom-friendly edtech solution</h4>
                        <p className='class-launched'>Class, launched less than a year ago by Blackboard<br /> co-founder Michael Chasen, integrates exclusively...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div>
                            {
                            LATESTNEWSARRAY.map((item) =>
                                <div className='news-list'>
                                    <div className='news-media'>
                                        <img src={item.image} alt="news image" />
                                        <h5>{item.newsTag}</h5>
                                    </div>
                                    <div className='news-text'>
                                        <h4>{item.headline}</h4>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}