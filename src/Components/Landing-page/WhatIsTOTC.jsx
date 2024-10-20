// This is the contents for what is TOTC? section of the Landing page
import YouCan from '../../Images/landing-page/you-can-do.png'

export default function WhatIsTOTC() {
    return (
        <>
            <div className='whatsTOTC-container'>
                <div className='what-is-totc'>
                    <h2 className='what'>What is <span>TOTC?</span></h2>
                    <p className='what-paragraph'>TOTC is a platform that allows educators to create online
                        classes whereby they can store the course materials online;
                        manage assignments, quizzes and exams; monitor due dates; grade
                        results and provide students with feedback all in one place.
                    </p>
                </div>
                <div className='instructor-students'>
                    <div className='for-instructors'>
                        <div>
                            <h2>FOR INSTRUCTORS</h2>
                            <button>Start a class today</button>
                        </div>
                    </div>
                    <div className='for-students'>
                        <div>
                            <h2>FOR STUDENTS</h2>
                            <button>Enter access code</button>
                        </div>
                    </div>
                </div>
                <div className="everything">
                <div className='everything-you-can'>
                    <h3>Everything you can do in a physical classroom, <span>you can do with TOTC</span></h3>
                    <p>TOTC’s school management software helps traditional and online schools manage
                        scheduling, attendance, payments and virtual classrooms all in one secure
                        cloud-based system.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <img src={YouCan} alt="Students attending lectures" width='650'/>
                </div>
                </div>
            </div>
        </>
    )
}