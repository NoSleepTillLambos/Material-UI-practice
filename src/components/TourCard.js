import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';

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
                    <AccessTime sx={{width: 12.5}}></AccessTime>
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                        5 Hours
                    </Typography>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    alignItems: 'center'
                }}
                >
                    <Rating name='read-only' size='small' value={4} readOnly/>
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                        4.5
                    </Typography>
                </Box>
            </Box>
            
        </Paper>
        
    </Grid>
  )
}

export default TourCard