import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './projectitem.scss';

const ProjectItem = ({ data }) => {
  return (
    <div className='card-container'>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          className='img'
          component='img'
          height='140'
          image={data.img}
          alt='project-img'
        />
        <CardContent>
          <Typography variant='h5' className='title'>
            {data.title}
          </Typography>
        </CardContent>
        <div className='hover-effect'>
          <div className='icons-div'>
            <a href={data.github_url} target='_blank'>
              <GitHubIcon className='icon' />
            </a>
            <a href={data.project_url} target='_blank'>
              <PinterestIcon className='icon' />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectItem;
