import React, { useContext, useEffect, useState } from 'react';
import PortfolioList from '../portfolio-list/PortfolioList';
import {
  jsProjects,
  listData,
  allProjects,
  reactProjects,
  tsProjects,
} from '../../data';
import './portfolio.scss';
import { Grid } from '@mui/material';
import ProjectItem from '../project-item/ProjectItem';
import { ThemeContext } from '../../context/ThemeContext';

const Portfolio = () => {
  const [selected, setSelected] = useState('react');
  const [projects, setProjects] = useState([]);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    switch (selected) {
      case 'all': {
        setProjects(allProjects);
        break;
      }
      case 'react': {
        setProjects(reactProjects);
        break;
      }
      case 'js': {
        setProjects(jsProjects);
        break;
      }
      case 'ts': {
        setProjects(tsProjects);
        break;
      }
      case 'mern': {
        setProjects([]);
        break;
      }
      default: {
        setProjects([]);
        break;
      }
    }
  }, [selected]);

  return (
    <div
      className={dark ? 'dark-portfolio' : 'portfolio-container'}
      id='portfolio'
    >
      <h1>Portfolio</h1>
      <div className='portfolio-list'>
        {listData.map((list, index) => (
          <PortfolioList
            key={index}
            data={list}
            active={selected === list.id}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className='portfolio-projects'>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProjectItem data={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Portfolio;
