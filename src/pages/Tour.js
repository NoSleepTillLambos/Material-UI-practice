import { Container, Typography } from '@mui/material'
import React, { Component }  from 'react';
import Box from '@mui/material/Box'
import ImageCollage from '../components/ImageCollage';
import SimpleAccordion from '../components/Accordion';

const Tour = () => <Container sx={{width: 900}}>
    
    <Typography variant='h3' component="h1" marginTop={3}>
        Explore the world in vegas
    </Typography>
    <Box marginTop={3} sx={{display:"flex"}}>
        
    </Box>
    <ImageCollage/>
    <Box>
        <Typography variant='h6' component="h4" marginTop={3}>
            About this ticket
        </Typography>

        <Typography variant='paragraph' component="p" marginTop={3}>
            lorem40 the fat white cow jumped over the mmoon and was then presented with 
            a doctor who cured his aids and his mental health issues which he was facing
        </Typography>
    </Box>
    <Box>
        <Typography variant='h6' component="h4" marginTop={3} marginBottom={2}>
            Frequently asked questions
        </Typography>
        <SimpleAccordion/>
    </Box>

</Container>

export default Tour