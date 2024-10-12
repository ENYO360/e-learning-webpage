// This is the contents for OUR FEATURES section of the Landing page
import GroupImage from '../../Images/landing-page/our-features-group-image.png'
import ToolsForTeachers from '../../Images/landing-page/tools-for-teachers.png'
import TrueOrFalse from '../../Images/landing-page/true-or-false.png'
import ClassManagement from '../../Images/landing-page/class-management.png'
import OneOnOne from '../../Images/landing-page/one-on-one.png'
export default function OurFeatures() {
    return (
        <>
            <div>
                <h2>Our Features</h2>
                <p>This very extraordinary feature, can make learning 
                    activities more efficient
                </p>
            </div>
            <div>
                <img src={GroupImage} alt="group of people" />
            </div>
            <div>
                <h2>A user interface designed for the classroom</h2>
                <ul>
                    <li>
                        Teachers don’t get lost in the grid view and have a dedicated Podium space.
                    </li>
                    <li>
                        TA’s and presenters can be moved to the front of the class. 
                    </li>
                    <li>
                        Teachers can easily see all students and class data at one time.
                    </li>
                </ul>
            </div>
            <div>
                <h2>Tools For Teachers And Learners</h2>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                    Teachers can handout assignments in real-time for students to complete and submit.
                </p>
            </div>
            <div>
                <img src={ToolsForTeachers} alt="Student's picture" />
            </div>
            <div>
                <img src={TrueOrFalse} alt="city by the river bank" />
            </div>
            <div>
                <h2>Assessments, Quizes, Test</h2>
                <p>Easily launch live assignments, quizzes, and tests.
                    Student results are automatically entered in the online gradebook.
                </p>
            </div>
            <div>
                <h2>Class Management Tools for Educators</h2>
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. 
                    With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                </p>
            </div>
            <div>
                <img src={ClassManagement} alt="group of Teachers" />
            </div>
            <div>
                <img src={OneOnOne} alt="two teachers" />
            </div>
            <div>
                <h2>One-on-One Discussions</h2>
                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
            </div>
            <button>See more features</button>
        </>
    )
}