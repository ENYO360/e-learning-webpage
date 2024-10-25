import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logo from './Images/landing-page/site-logo.png'
import SignUp from './Components/Login-SignUp/SignUp'
import Home from './Components/Landing-page/Home'

export default function App() {
    return (
        <>
            <Router>
                <div className='nav-wrapper'>
                <nav>
                    <img src={Logo} alt="site logo"/>
                    <div className="nav-links">
                        <ul>
                            <li><Link className='link' to="/">Home</Link></li>
                            <li><Link className='link' to="/">Courses</Link></li>
                            <li><Link className='link' to="/">Careers</Link></li>
                            <li><Link className='link' to="/">Blog</Link></li>
                            <li><Link className='link' to="/">About Us</Link></li>
                        </ul>
                        <div className="nav-buttons">
                            <a href="#"><button className='login'>Login</button></a>
                            <Link to="/signup"><button className='sign-up'>Sign Up</button></Link>
                        </div>
                    </div>
                </nav>
                </div>

                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />}/>
                </Routes>
            </Router>
        </>
    )
}