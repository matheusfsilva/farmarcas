import React from 'react';
import './App.css';
import { Box, Container, Grid } from '@mui/material';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header';
import CardBotoes from './components/cardButtons';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ padding: '12px' }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={2}>
              <CardBotoes />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10}>
              <AppRoutes />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
