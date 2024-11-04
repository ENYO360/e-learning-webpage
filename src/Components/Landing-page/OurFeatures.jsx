// This is the contents for OUR FEATURES section of the Landing page
import GroupImage from '../../Images/landing-page/our-features-group-images.png'
import ToolsForTeachers from '../../Images/landing-page/tools-for-teachers.png'
import TrueOrFalse from '../../Images/landing-page/true-or-false.png'
import ClassManagement from '../../Images/landing-page/class-management.png'
import OneOnOne from '../../Images/landing-page/one-on-one.png'
export default function OurFeatures() {
    return (
        <>
            <div>
                <h2 className='our-features'>Our <span>Features</span></h2>
                <p className='our-features-pgh'>This very extraordinary feature, can make learning
                    activities more efficient
                </p>
            </div>
            <div className="our-features-group2">
                <div>
                    <img src={GroupImage} alt="group of people" width='800' />
                </div>
                <div className='a-user'>
                    <h2>A <span>user interface</span> designed for the classroom</h2>
                    <ul>
                        <li className='item1'>
                            Teachers don’t get lost in the grid view and have a dedicated Podium space.
                        </li>
                        <li className='item2'>
                            TA’s and presenters can be moved to the front of the class.
                        </li>
                        <li className='item3'>
                            Teachers can easily see all students and class data at one time.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="our-features-group3">
                <div className='tools'>
                    <h2><span>Tools</span> For Teachers And Learners</h2>
                    <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                        Teachers can handout assignments in real-time for students to complete and submit.
                    </p>
                </div>
                <div className='tools-img'>
                    <img src={ToolsForTeachers} alt="Student's picture" />
                </div>
            </div>
            <div className="our-features-group4">
                <div>
                    <img src={TrueOrFalse} alt="city by the river bank" />
                </div>
                <div className='assessments'>
                    <h2>Assessments, <span>Quizes</span>, Test</h2>
                    <p>Easily launch live assignments, quizzes, and tests.
                        Student results are automatically entered in the online gradebook.
                    </p>
                </div>
            </div>
            <div className="our-features-group5">
                <div className='class-mgt'>
                    <h2><span>Class Management</span> Tools for Educators</h2>
                    <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more.
                        With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                    </p>
                </div>
                <div className='class-mgt-img'>
                    <img src={ClassManagement} alt="group of Teachers" width='650' />
                </div>
            </div>
            <div className="our-features-group6">
                <div>
                    <img src={OneOnOne} alt="two teachers" width='650'/>
                </div>
                <div className='one-on-one'>
                    <h2>One-on-One <span>Discussions</span></h2>
                    <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </div>
                <div className='see-more'>
                    <button>See more features</button>
                </div>
        </>
    )
}