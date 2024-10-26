import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { React, useState } from 'react'
import Logo from './Images/landing-page/site-logo.png'
import SignUp from './Components/Login-SignUp/SignUp'
import Home from './Components/Landing-page/Home'

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}