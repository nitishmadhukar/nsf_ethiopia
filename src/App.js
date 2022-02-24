import React from 'react';
import './App.css';
import {Container, AppBar,Toolbar,Typography, ThemeProvider, createTheme} from '@mui/material';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './About'
import ResultCards from './ResultsCards';

function App() {
  return (
    <Router>
      <div className="App">
      <Container>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" fullWidth={true}>
          <Toolbar>
            <Typography noWrap variant="h6" component="div">Team Farming</Typography>&nbsp;
            <Typography variant="body" component="div" sx={{ minWidth: 80 }}><Link to="/" className="navlink">About</Link></Typography>
            <Typography variant="body" component="div" sx={{ minWidth: 80 }}><Link to="/results" className="navlink">Results</Link></Typography>
          </Toolbar>
          </AppBar>
          <br />
        </ThemeProvider>
      </Container>
        <Routes>
            <Route exact path="/results" element={<ResultCards />}></Route>
            <Route exact path="/" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default App;
