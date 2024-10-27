import React from 'react';
import { BrowseRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Student1 from '../../Images/signUp-logIn/pupil-raising-hand.png';
import '../Css/Login.css'

export default function SignUp() {
    return (
        <>
            <div className="sign-up-wrapper">
                <div className='sign-up-img-wrap'>
                    <img src={Student1} alt="pupil raising hand" />
                    <h2>Lorem Ipsum is simply </h2>
                    <p>Lorem Ipsum is simply </p>
                </div>
                <div className='login-form-wrap'>
                    <div className='welcome'>
                        <h3>Welcome to lorem..!</h3>
                        <div>
                            <button className='login-btn'>Login</button>
                            <Link to="/signup"><button className='no-sign-up-selected'>Register</button></Link>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <form action="" className='sign-up-form'>
                        <label htmlFor="username">
                            User name
                            <input type="text" name='username' placeholder='Enter your User name'/>
                        </label>
                        <label htmlFor="password">
                            Password
                            <input type="password" name='password' placeholder='Enter your Password'/>
                        </label>
                        <label htmlFor="checkbox" className='check-me'>
                            <div>
                                <input type="checkbox" name='checkbox' />
                                Remember me
                            </div>
                            <Link className='forgot'>Forgot Password?</Link>
                        </label>
                        <button className='register-btn'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}