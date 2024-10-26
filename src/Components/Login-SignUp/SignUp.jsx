import Student1 from '../../Images/signUp-logIn/pupil-raising-hand-1.png';
import '../Css/SignUp.css'

export default function SignUp() {
    return (
        <>
            <div className="sign-up-wrapper">
                <div className='sign-up-img-wrap'>
                    <img src={Student1} alt="pupil raising hand" />
                    <h2>Lorem Ipsum is simply </h2>
                    <p>Lorem Ipsum is simply </p>
                </div>
                <div>
                    <div className='welcome'>
                        <h3>Welcome to lorem..!</h3>
                        <div>
                            <button className='no-login-selected'>Login</button>
                            <button className='sign-up-btn'>Register</button>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form action="" className='sign-up-form'>
                        <label htmlFor="email">
                            Email Address
                            <input type="email" name='eamil' placeholder='Enter your Email Address'/>
                        </label>
                        <label htmlFor="username">
                            User name
                            <input type="text" name='username' placeholder='Enter your User name'/>
                        </label>
                        <label htmlFor="password">
                            Password
                            <input type="password" name='password' placeholder='Enter your Password'/>
                        </label>
                        <button className='register-btn'>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}