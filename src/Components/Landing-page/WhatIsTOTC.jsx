// This is the contents for what is TOTC? section of the Landing page
import ForInstructors from '../../Images/landing-page/for-instructor.png'
import ForStudents from '../../Images/landing-page/for-students.png'
import YouCan from '../../Images/landing-page/you-can-do-with-TOTC.png'
export default function WhatIsTOTC() {
    return (
        <>
            <div>
                <div>
                    <h2>What is TOTC?</h2>
                    <p>TOTC is a platform that allows educators to create online 
                        classes whereby they can store the course materials online; 
                        manage assignments, quizzes and exams; monitor due dates; grade 
                        results and provide students with feedback all in one place.
                    </p>
                </div>
                <div>
                    <h2>FOR INSTRUCTORS</h2>
                    <button>Start a class today</button>
                </div>
                <div>
                    <h2>FOR STUDENTS</h2>
                    <button>Enter access code</button>
                </div>
                <div>
                    <h3>Everything you can do in a physical classroom, you can do with TOTC</h3>
                    <p>TOTC’s school management software helps traditional and online schools manage 
                        scheduling, attendance, payments and virtual classrooms all in one secure 
                        cloud-based system.
                    </p>
                    <button>Learn more</button>
                </div>
                <div>
                    <img src={YouCan} alt="Students attending lectures" />
                </div>
            </div>
        </>
    ) 
}