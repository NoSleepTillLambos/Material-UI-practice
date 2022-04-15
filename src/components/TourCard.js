import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';


function TourCard() {
  return (
    
    <Grid item xs={3}>
        <Paper elevation={4}>
            <img id='image' src='https://cdn.vox-cdn.com/thumbor/PgamW7529c37VWzBUmfDedzevOQ=/0x0:4775x3091/1220x813/filters:focal(2006x1164:2770x1928):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69239730/1303177487.0.jpg'></img>
            
            <Box paddingX={1}>
            <Typography variant='subtitle1' component="h2">
            Liverpool
            </Typography>

            <Box 
            sx={{
                display: "flex",
                alignItems: 'center'
            }}>
                <Typography variant='body2' component="p">
                    5 Hours
                </Typography>
            </Box>
            </Box>
            
        </Paper>
        
    </Grid>
  )
}

export default TourCard