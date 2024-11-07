import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { React, useState } from 'react';
import Logo from './Images/landing-page/site-logo.png';
import SignUp from './Components/Login-SignUp/SignUp';
import Home from './Components/Landing-page/Home';
import Login from './Components/Login-SignUp/Login';
import UserDetails from './Components/Dashboard/UserDetails';

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='userDetails' element={<UserDetails />} />
                </Routes>
            </Router>
        </>
    )
}