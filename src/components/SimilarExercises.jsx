import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import HorizontalScroolbar from './HorizontalScrollbar'
import Loader from './Loader'




const SimilarExercises = ({ targetMuscleExercise,  equipmentMuscleExercise}) => {
  return (
    <Box sx={{ mt: { lg: '300px', xs: '0'}}}>
      <Typography variant='h5' mb='20px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercise.length ? <HorizontalScroolbar data= {targetMuscleExercise} /> : <Loader />}
      </Stack>
      <Typography variant='h5' mb='20px'>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {equipmentMuscleExercise.length ? <HorizontalScroolbar data= {equipmentMuscleExercise} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises;