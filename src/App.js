import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { auth } from './firebase';
import Logo from './Images/landing-page/site-logo.png';
import SignUp from './Components/Login-SignUp/SignUp';
import Home from './Components/Landing-page/Home';
import Login from './Components/Login-SignUp/Login';
import UserDetails from './Components/Dashboard/UserDetails';

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    return (
        <>  
            
            {user ? 
            <div>
                <UserDetails />
            </div> :
            
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='userDetails' element={user ? <UserDetails />: <Navigate to='/login' />} />
                </Routes>
             }
            
        </>
    )
}