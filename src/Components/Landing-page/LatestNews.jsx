// This is the contents for LATEST NEWS section of the Landing page
import NewsCard1 from '../../Images/landing-page/news-card-1.png'
import { LATESTNEWSARRAY } from './LatestNewsData'


export default function LatestNews() {
    return (
        <>
            <div>
                <div>
                    <h3>Lastest News and Resources</h3>
                    <p>See the developments that have occurred to TOTC in the world</p>
                </div>
                <div>
                    <div>
                        <img src={NewsCard1} alt="News card1" />
                        <h4>NEWS</h4>
                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div>
                        <div>
                            {
                            LATESTNEWSARRAY.map((item) =>
                                <>
                                    <div>
                                        <img src={item.image} alt="news image" />
                                        <h4>{item.newsTag}</h4>
                                    </div>
                                    <div>
                                        <h4>{item.headline}</h4>
                                        <p>{item.details}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}