import { Card, Grid } from '@mui/material';
import React, { useContext } from 'react';
import './testimonials.scss';
import { testimonialData } from '../../data';
import UndoIcon from '@mui/icons-material/Undo';
import { Facebook } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';

const Testimonials = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={dark ? 'dark-testimonial' : 'testimonial-container'}
      id='testimonials'
    >
      <h1>Testimonials</h1>
      <Grid container spacing={2}>
        {testimonialData.map((data, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <div className='card'>
              <div className='top'>
                <UndoIcon className='undo-icon' />
                <img src={data.img} alt='img' />
                <a href={data.fb_link} target='_blank'>
                  <Facebook className='fb-icon' />
                </a>
              </div>
              <div className='center'>
                <h6>{data.desc}</h6>
              </div>
              <div className='bottom'>
                <h3>{data.name}</h3>
                <h4>{data.position}</h4>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;
