import { SuccessData } from './SuccessData'
import { CloudData } from './SuccessData'



export default function Main() {
    return (
        <>
            <div className="sections-container">
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
                                    <h1>{items.rate}</h1>
                                    <p>{items.description}</p>
                                </li>
                            )
                                
                        }
                    </div>
                    <div className="main-section1-sub3">
                        <h2>All-In-One Cloud Software.</h2>
                        <p>Ornare id fames interdum porttitor 
                            nulla turpis etiam. Diam vitae sollicitudin 
                            at nec nam et pharetra gravida. Adipiscing a quis 
                            ultrices eu ornare tristique vel nisl orci. 
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
                    
                </div>
            </div>
        </>
    )
}