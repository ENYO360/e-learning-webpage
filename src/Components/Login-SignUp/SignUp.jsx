import { React, useState } from 'react';
import { db, auth } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { BrowseRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Student1 from '../../Images/signUp-logIn/pupil-raising-hand-1.png';
import '../Css/SignUp.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

        // Validation function
        const validateForm = () => {
            if (!email || !username || !password) {
                setError('All fields are required.');
                return false;
            }
            // Simple email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email.');
                return false;
            }
            setError('');
            return true;
        };

        // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        try {
            // Add form data to Firestore
            await addDoc(collection(db, 'formSubmissions'), {
                email,
                username,
                password,
                timestamp: new Date()
            });
            setSuccess('Form submitted successfully!');
            setEmail('');
            setUsername('');
            setPassword('');
        } catch (err) {
            console.error('Error submitting form: ', err);
            setError('There was an error submitting the form.');
        }

        try {
            // Register the user with Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Registration successful!');
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError('Email already in use');
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters');
            } else {
                setError('Failed to register. Please try again.');
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
                <div>
                    <div className='welcome'>
                        <h3>Welcome to lorem..!</h3>
                        <div>
                            <Link to="/login"><button className='no-login-selected'>Login</button></Link>
                            <button className='sign-up-btn'>Register</button>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <form onSubmit={handleSubmit} className='sign-up-form'>
                        <label htmlFor="email">
                            Email Address
                            <input
                                type="email" 
                                name='eamil'
                                value={email}
                                placeholder='Enter your Email Address'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label htmlFor="username">
                            User name
                            <input
                                type="text"
                                value={username}
                                name='username'
                                placeholder='Enter your User name'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input 
                                type="password"
                                value={password}
                                name='password'
                                placeholder='Enter your Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button className='register-btn'>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}