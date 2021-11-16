import { ArrowBack, ArrowForward } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './slider.scss';
import { sliderData } from '../../data';
const Slider = () => {
  const [current, setCurrent] = useState(1);
  const length = sliderData.length;
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
  }, [current]);

  return (
    <div className='slider-container'>
      <ArrowBack className='arrow' onClick={prev} />

      <div className='slider'>
        {sliderData.map((data, index) => (
          <div
            key={index}
            className={`slider-data ${
              index === current ? 'slide active' : 'slide'
            }`}
          >
            {/* {current === index && (
              <div className='slider-info'>
                <h3>{data.title}</h3>
              </div>
            )} */}
            <div className='slider-img'>
              {current === index && <img src={data.img} alt='slider-img' />}
            </div>
          </div>
        ))}
      </div>
      <ArrowForward className='arrow' onClick={next} />
    </div>
  );
};

export default Slider;
