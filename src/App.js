import Header from './Components/Landing-page/Header';
import Hero from './Components/Landing-page/Hero';
import Main from './Components/Landing-page/Main';
import './App.css';
import '../src/Components/Css/LandingPage.css';

function App() {
  return (
    <>
      <div className='header-hero'>
        <Header />
        <Hero />
      </div>
      <Main />
    </>
  );
}

export default App;
