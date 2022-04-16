import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/system';


const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props:{
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                    props:{
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                }
            ]
        }
    }
})

function TourCard({tour}) {
  return (
    
    <Grid item xs={3}>
        <Paper elevation={4}>
            <img id='image'  src={tour.image}></img>
            
            <Box paddingX={0.5} >
                <Typography variant='subtitle1' component="h2">
                    {tour.name}
                </Typography>

                <Box 
                sx={{
                    display: "flex",
                    alignItems: 'center'
                }}>
                    <AccessTime sx={{width: 12.5}}></AccessTime>
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                        {tour.duration}
                    </Typography>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    alignItems: 'center'
                }}
                >
                    <Rating
                    name='read-only' 
                    size='small' 
                    value={4} 
                    readOnly/>

                    <Typography variant='body2' component="p" marginLeft={0.2}>
                        {tour.rating}
                    </Typography>
                    <Typography variant='p' component="p" marginLeft={1}>
                        {tour.numberOfReviews}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='p' component="p" marginTop={0}>
                        {tour.price}
                    </Typography>
                </Box>
            </Box>
            
        </Paper>
        
    </Grid>
  )
}

export default TourCard