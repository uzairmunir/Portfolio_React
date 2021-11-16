import { Brightness3, WbSunny } from '@mui/icons-material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './theme.scss';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  const onToggle = () => {
    toggleTheme();
  };

  return (
    <div className='theme-container'>
      {dark ? (
        <WbSunny
          className={`moon-icon ${dark ? 'light' : 'moon-icon'}`}
          onClick={onToggle}
        />
      ) : (
        <Brightness3
          className={`sun-icon ${dark ? 'light' : 'moon-icon'}`}
          onClick={onToggle}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
