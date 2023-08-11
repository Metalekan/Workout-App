import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {

  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'loading...'
  
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '30px'}}} p='20px' >
      <Typography variant='h3' mb='30px'>Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos</Typography>
      <Stack justifyContent='center' alignItems='center' sx={{ flexDirection: {lg: 'row'}, gap: { lg: '110px', xs: '0'}}}>
        {
          exerciseVideos?.slice(0, 6).map((item, index) => (
            <a href={`http://www.youtube.com/watch?v=${item.video.videoId}`} key={index} className='exercise-video' target='_blank' rel='noreferrer'>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box className='text'>
              <Typography variant='h6' color='#000' mb='10px'>
                {item.video.title}
              </Typography>
              <Typography variant='h5' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
            </a>
            
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos