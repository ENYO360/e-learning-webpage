import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Hero from '../Landing-page/Hero'
import Main from '../Landing-page/Main';
import Main1 from '../Landing-page/Main1';
import Footer from '../Landing-page/Footer';
import Logo from '../../Images/landing-page/site-logo.png';
import Hamburger from '../../Images/landing-page/icon-hamburger.svg';
import ToggleClose from '../../Images/landing-page/icon-close.svg';
import '../../App.css';
import '../Css/LandingPage.css';

function Home() {

  const [toggleClose, setToggleClose] = useState(true)
  const [showNavLinks, setShowNavLinks] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  function toggleNav() {
    setToggleClose(prevState => !prevState)
    setShowNavLinks(prevNav => !prevNav)
    console.log(toggleClose)
  }

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='header-hero'>
        <div className='nav-wrapper'>
          <nav>
            <img className='site-logo' src={Logo} alt="site logo" />
            {toggleClose ?
              <button onClick={toggleNav} id="hamburger"><img src={Hamburger} alt="icon-hamburger" width='40'/></button> :
              <button onClick={toggleNav} id="toggle-close"><img src={ToggleClose} alt="icon-hamburger" width='40'/></button>
            }
            {(showNavLinks && isMobile) ? '' :
              <div className="nav-links">
                <ul>
                  <li><Link className='link' to="/">Home</Link></li>
                  <li><Link className='link' to="/">Courses</Link></li>
                  <li><Link className='link' to="/">Careers</Link></li>
                  <li><Link className='link' to="/">Blog</Link></li>
                  <li><Link className='link' to="/">About Us</Link></li>
                </ul>
                <div className="nav-buttons">
                  <Link to="/login"><button className='login'>Login</button></Link>
                  <Link to="/signup"><button className='sign-up'>Sign Up</button></Link>
                </div>
              </div>
            }   
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
