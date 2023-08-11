import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchDataN, youtubeOptions } from '../utility/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const [equipmentMuscleExercise, setEquipmentMuscleExercise] = useState([])

  const {id} = useParams();
  
  useEffect(()=> {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchDataN(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchDataN(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExerciseData = await fetchDataN(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercise(targetMuscleExerciseData)

      
      const equipmentMuscleExerciseData = await fetchDataN(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscleExercise(equipmentMuscleExerciseData)

      // setExerciseDetail(exerciseDetailData);
      console.log(equipmentMuscleExerciseData)
    }
    
    fetchExercisesData();
  }, [id])




  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentMuscleExercise={equipmentMuscleExercise}/>
    </Box>
  )
}

export default ExerciseDetails