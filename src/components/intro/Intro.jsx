import React, { useContext, useEffect, useRef } from 'react';
import { init } from 'ityped';
import { ThemeContext } from '../../context/ThemeContext';
import './intro.scss';

const Intro = () => {
  const textRef = useRef('');
  const { dark } = useContext(ThemeContext);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Software Engineer', 'Web Developer', 'Web Designer'],
    });
  }, []);
  return (
    <div className={dark ? 'dark' : 'intro-container'} id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/uzair8.png' alt='Intro-img' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Uzair Munir</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href='#portfolio'>
            <img src='assets/down.png' className='down-img' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
