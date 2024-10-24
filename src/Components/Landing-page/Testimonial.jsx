// This is the contents for the TESTIMONIAL section of the Landing page
import { TESTIFIERDATA } from './TestifierData'
import ForwardIcon from '../../Images/landing-page/forward-arrow.png'
import ForwardIcon2 from '../../Images/landing-page/forward-icon-2.png'

export default function Testimonial() {
    return (
        <div className='testimony-container'>
            <div className='testimony'>
                <h5>TESTIMONIAL</h5>
                <h2>What They Say</h2>
                <p>
                    TOTC has got more than 100k positive ratings from our users around the world. <br /><br />
                    Some of the students and teachers were greatly helped by the Skilline. <br /><br />
                    Are you too? Please give your assessment
                </p>
                <a href="#">
                    Write your assessment
                    <img src={ForwardIcon} alt="forward Icon" />
                </a>
            </div>
            <div className='testifier-container'>
                <img src={ForwardIcon2} alt="Forward Icon" className='next-testimony' />
                {TESTIFIERDATA.map((item) =>
                    <>
                        <img src={item.image} alt="" width='500' />
                        <div className='testimony-details'>
                            <p className='what-they-say'>{item.testimony}</p>
                            <div className='review-details'>
                                <p className='testifier-name'>{item.testifier}</p>
                                <div>
                                    <img src={item.rating} alt="rating stars" />
                                    <p>{item.noOfReviews}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}