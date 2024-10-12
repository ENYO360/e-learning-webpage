// This is the contents for EXPLORE COURSES section of the Landing page
import ColorPalette from '../../Images/landing-page/color-palette.png'
import Globe from '../../Images/landing-page/globe.png'
import Aenean from '../../Images/landing-page/aenean.png'
import ArrowForward from '../../Images/landing-page/arrow-forward.png'
import CourseGroup1 from '../../Images/landing-page/course-group-1.png'
import CourseGroup2 from '../../Images/landing-page/course-group-2.png'
import CourseGroup3 from '../../Images/landing-page/course-group-3.png'


export default function ExplorCourses() {
    return (
        <>
            <div>
                <h2>Explore Course</h2>
                <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
            </div>

            <div>
                <div>
                    <div>
                        <img src={ColorPalette} alt="color palette icon" />
                        <p>Lorem Ipsum</p>
                    </div>
                    <a href="#">
                        SEE ALL
                        <img src={ArrowForward} alt="forward arrow icon" />
                    </a>
                </div>
                <img src={CourseGroup1} alt="first course group" />
            </div>
            <div>
                <div>
                    <div>
                        <img src={Globe} alt="globe Icon" />
                        <p>Quisque a Consequat</p>
                    </div>
                    <a href="">
                        SEE ALL
                        <img src={ArrowForward} alt="forward arrow icon" />
                    </a>
                </div>
                <img src={CourseGroup2} alt="second course group" />
            </div>
            <div>
                <div>
                    <div>
                        <img src={Aenean} alt="Aenean icon" />
                        <p>Aenean Facilisis</p>
                    </div>
                    <a href="">
                        SEE ALL
                        <img src={ArrowForward} alt="forward arrow icon" />
                    </a>
                </div>
                <img src={CourseGroup3} alt="third course group" />
            </div>
        </>
    )
}