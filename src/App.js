import './App.css';
import TourCard from './components/TourCard';
import { Container, Grid } from '@mui/material';
import React from 'react';
import SearchAppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
        <Container sx={{marginY: 5}}>
        <Grid container spacing={3}>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        </Grid >

        </Container>
      
      
    </div>
  );
}

export default App;
