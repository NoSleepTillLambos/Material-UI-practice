import './App.css';
import TourCard from './components/TourCard';
import { Container, Grid } from '@mui/material';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
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
