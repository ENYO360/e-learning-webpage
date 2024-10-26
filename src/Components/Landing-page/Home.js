import React from 'react';
import { BrowseRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hero from '../Landing-page/Hero'
import Main from '../Landing-page/Main';
import Main1 from '../Landing-page/Main1';
import Footer from '../Landing-page/Footer';
import Logo from '../../Images/landing-page/site-logo.png'
import '../../App.css'
import '../Css/LandingPage.css';

function Home() {
  return (
    <>
      <div className='header-hero'>
        <div className='nav-wrapper'>
          <nav>
            <img src={Logo} alt="site logo" />
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
        <Hero />
      </div>
      <Main />
      <Main1 />
      <Footer />
    </>
  );
}

export default Home;
