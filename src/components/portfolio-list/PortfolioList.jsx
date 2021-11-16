import React from 'react';
import './PortfolioList.scss';

const PortfolioList = ({ data, active, setSelected }) => {
  return (
    <div
      className={
        active ? 'portfolio-list-title active' : 'portfolio-list-title'
      }
      onClick={() => setSelected(data.id)}
    >
      <h4>{data.title}</h4>
    </div>
  );
};

export default PortfolioList;
