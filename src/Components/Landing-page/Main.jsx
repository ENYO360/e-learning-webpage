import { SuccessData } from './SuccessData'
import { CloudData } from './SuccessData'
import WhatIsTOTC from './WhatIsTOTC'
import OurFeatures from './OurFeatures'
import ExplorCourses from './ExploreCourses'
import LatestNews from './LatestNews'
import Testimonial from './Testimonial'
import Footer from './Footer'



export default function Main() {
    return (
        <>
            <div className="section-container">
                <div className="main-section1">
                    <div className="main-section1-sub1">
                        <h2>Our Success</h2>
                        <p>Ornare id fames interdum porttitor nulla
                            turpis etiam. Diam vitae sollicitudin at
                            nec nam et pharetra gravida. Adipiscing a
                            quis ultrices eu ornare tristique vel nisl orci.
                        </p>
                    </div>
                    <div className="main-section1-sub2">
                        {
                            SuccessData.map((items) =>
                                <li>
                                    <h1 className='gradient-number'>{items.rate}</h1>
                                    <p className='normal-text'>{items.description}</p>
                                </li>
                            )

                        }
                    </div>
                    <div className="main-section1-sub3">
                        <h2>All-In-One <span>Cloud Software.</span></h2>
                        <p>TOTC is one powerful online software suite that
                             combines all the tools needed to run a successful school or office.
                        </p>
                    </div>
                    <div className="main-section1-sub4">
                        {
                            CloudData.map((items) =>
                                <div>
                                    <img src={items.img} alt="" />
                                    <h3>{items.topic}</h3>
                                    <p>{items.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="main-section2">
                    <WhatIsTOTC />
                    <OurFeatures />
                </div>
            </div>
        </>
    )
}