import React from 'react';
import { BrowseRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hero from '../Landing-page/Hero'
import Main from '../Landing-page/Main';
import Main1 from '../Landing-page/Main1';
import Footer from '../Landing-page/Footer';
import '../../App.css'
import '../Css/LandingPage.css';

function Home() {
  return (
    <>
      <div className='header-hero'>
        <Hero />
      </div>
      <Main />
      <Main1 />
      <Footer />
    </>
  );
}

export default Home;
