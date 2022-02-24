import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink as RRNavLink} from 'react-router-dom';
import About from './About'
import ResultCards from './ResultsCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/results" element={<ResultCards />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
