// This is the contents for the TESTIMONIAL section of the Landing page
import { TESTIFIERDATA } from './TestifierData'
import ForwardIcon from '../../Images/landing-page/forward-icon-1.png'
import ForwardIcon2 from '../../Images/landing-page/forward-icon-2.png'

export default function Testimonial() {
    return (
        <>
            <div>
                <h5>TESTIMONIAL</h5>
                <h2>What They Say</h2>
                <p>
                    TOTC has got more than 100k positive ratings from our users around the world. <br />
                    Some of the students and teachers were greatly helped by the Skilline. <br />
                    Are you too? Please give your assessment
                </p>
                <a href="#">
                    <p>Write your assessment</p>
                    <img src={ForwardIcon} alt="forward Icon" />
                </a>
            </div>
            <div>
                <img src={ForwardIcon2} alt="Forward Icon" />
                {TESTIFIERDATA.map((item) =>
                    <>
                        <img src={item.image} alt="" />
                        <div>
                            <p>{item.testimony}</p>
                            <p>{item.testifier}</p>
                            <div>
                                <p>{item.noOfReviews}</p>
                                <img src={item.rating} alt="rating stars" />
                            </div>
                        </div>
                    </> 
                )}
            </div>
        </>
    )
}