import React from 'react';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import './app.scss';
import Intro from './components/intro/Intro';
import Slider from './components/slider/Slider';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import ThemeProvider from './context/ThemeContext';
import ThemeToggle from './components/dark-theme/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div className='app'>
        <Navbar />
        <div className='sections'>
          <Intro />
          <Portfolio />
          {/* <Slider /> */}
          <Testimonials />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
