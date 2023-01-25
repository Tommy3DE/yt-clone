import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx: 'column', md: 'row' }}}>
      
      <Box p={2} sx={{ overflowY: 'auto', height: '99vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb='2' sx={{color: 'white'}}>
          New <span style={{color: '#f31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>

  )
}

export default Feed