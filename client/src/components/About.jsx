import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div>
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{fontFamily:"fantasy"}} variant ='h2'>This is a Book Store App</Typography>

        </Box>
    </div>
  )
}

export default About