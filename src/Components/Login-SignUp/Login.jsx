import { React, useState} from 'react';
import { db, auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BrowseRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Student1 from '../../Images/signUp-logIn/pupil-raising-hand.png';
import '../Css/Login.css'

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

        // Validate username and password
        const validateForm = () => {
            if (!email || !password) {
                setError('All fields are required');
                return false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email');
                return false;
            }
            if (password.length < 6) {
                setError('Password should be at least 6 characters long');
                return false;
            }
            setError('');
            return true;
        };

        // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            // Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            alert('Login successful!');
        } catch (err) {
            setLoading(false);
            if (err.code === 'auth/user-not-found') {
                setError('No user found with this email');
            } else if (err.code === 'auth/wrong-password') {
                setError('Incorrect password');
            } else {
                setError('Failed to log in. Please try again');
            }
        }
    };

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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onChange={handleSubmit} className='sign-up-form'>
                        <label htmlFor="email">
                            Email
                            <input
                                 type="email" 
                                 name='email' 
                                 placeholder='Enter your Email'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 required
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input 
                                type="password" 
                                name='password' 
                                placeholder='Enter your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label htmlFor="checkbox" className='check-me'>
                            <div>
                                <input type="checkbox" className='check' name='checkbox' />
                                Remember me
                            </div>
                            <Link className='forgot'>Forgot Password?</Link>
                        </label>
                        <button className='register-btn'>{loading ? 'Logging in...' : 'Login'}</button>
                    </form>
                </div>
            </div>
        </>
    )
}