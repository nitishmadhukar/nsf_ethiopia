import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import About from './About'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar color="dark" expand="md" dark>
              <NavbarBrand href="/">Team Farming</NavbarBrand>
              <NavbarToggler onClick={function noRefCheck(){}} />
              <Collapse navbar>
                  <Nav className="me-auto" navbar>
                      <NavItem><Link to="/">About</Link></NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
      <Routes>
          <Route exact path="/" element={<About />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
