import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink as RRNavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import About from './About'
import ResultCards from './ResultsCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar color="dark" expand="md" dark>
            <NavbarBrand href="/">Team Farming</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                  <NavItem><NavLink tag={RRNavLink} exact to="/">About</NavLink></NavItem>
                  <NavItem><NavLink tag={RRNavLink} exact to="/results">Results</NavLink></NavItem>
              </Nav>
            </Collapse>
        </Navbar>
        <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/results" element={<ResultCards />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
