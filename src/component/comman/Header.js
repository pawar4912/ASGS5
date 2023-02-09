import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import './header.scss';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from '../Home'
import OurPrograms from '../../OurPrograms';
import University from '../university/University';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';


function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='navbar-nav' >
      <Container >
    
        <Navbar.Brand href="#home" className='imgra'>
        <img src={require('../../asset/ASGS-02.jpg')}  height={69}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " >
         
          <Nav  className='submenu'>
            <Nav.Link  className='suces'><NavLink className='sudes' to='/Sucess'> Success Stories  </NavLink></Nav.Link>
            <Nav.Link className='suces' eventKey={2} href="#memes">
            <NavLink className='sudes' to='/Schol'>  Scholarships</NavLink>
            </Nav.Link>

            <Nav.Link className='suces' ><NavLink className='sudes' to='/Study'> Study Center</NavLink></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button className='buttonBg btn-rounded btnapply suces'><NavLink className='text-white' to='/apply'> Apply Now </NavLink> </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex justify-content-evenly navsec'>
    <span className='hovred' > <NavLink className='text-white' to='/'>Home</NavLink></span>
     {/*.................. new code start */}
     <div>
                <Dropdown   title="Our Programs">
                
                    <Dropdown.Menu title="International Bachelor's">
                        <Dropdown.Item> <NavLink className='fond' to="/itprograms"> Information Technology </NavLink></Dropdown.Item>
                        <Dropdown.Item><NavLink to="/bussiness"> Business </NavLink></Dropdown.Item>
                    </Dropdown.Menu>
                <Dropdown.Item>Online Programs</Dropdown.Item>
                <Dropdown.Item>Global Certification</Dropdown.Item>
                
            </Dropdown>
        </div>

     {/* 2nd code */}
     <div>
                <Dropdown   title="Academic Partners" className="menusize">
                <Dropdown.Item> <NavLink to='/uni'>Preminum</NavLink></Dropdown.Item>
                   
                <Dropdown.Item>  <NavLink to='/assured'>Assured</NavLink></Dropdown.Item>
                <Dropdown.Item>  <NavLink to='/progression'>Progression</NavLink></Dropdown.Item>
              
            </Dropdown>
        </div>

    

    {/* ............new code end */}
    {/* <Dropdown>
      <Dropdown.Toggle
        className="main-style1 maindrop arrtext  "
        id="dropdown-basic" 
        style={{background:'balck'}}
       >
        Our Programs
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown1}>
        <Dropdown.Item >
        {['end'].map(
          (direction) => (
        <Dropdown
      onMouseLeave={() => setShowDropdown1(false)}
      onMouseOver={() => setShowDropdown1(true)}
      style={{ width: '166px'}}
     
      key={direction}
      id={`dropdown-button-drop-${direction}`}
      drop={direction}
      variant="secondary"
      
      >  
      <Dropdown.Toggle
        className="main-style1 text-center px-1"
        id="dropdown-basic1"
        style={{color:'black'}}
       >
International Bachelor's    

      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown1}>
        <Dropdown.Item >
        <NavLink  to='/itprograms' style={{color:'black'}}>Information Technology</NavLink>
         
    </Dropdown.Item>


        <Dropdown.Item>
        <NavLink  to='/bussiness' style={{color:'black'}}>Business</NavLink>
       </Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
      ),
      )}
    </Dropdown.Item>


        <Dropdown.Item href="#" className="newdrop">
 Online Programs        </Dropdown.Item>
        <Dropdown.Item href="#" className="newdrop">
 Global certification        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    {/* <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="main-style1 maindrop arrtext">
        Academic Partners
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><NavLink  to='/uni' style={{color:'black'}}>Premium</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink  to='/assured' style={{color:'black'}}>Assured</NavLink></Dropdown.Item>
        <Dropdown.Item ><NavLink  to='/progression' style={{color:'black'}}>Progression</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    {/* <p className='hovred'> <NavLink className='text-white' to='/'>University Partners</NavLink></p> */}
    {/* <p >Our Program </p>
    <p> University Partners </p> */}
      <span className='hovred' > <NavLink className='text-white' to='/KnowMore'>About ASGS </NavLink></span>
      <span className='hovred' > <NavLink className='text-white' to='/News'>News & Events </NavLink></span>
      <span className='hovred' > <NavLink className='text-white' to='/apply'>Contact Us </NavLink></span>
    {/* <p className='hovred'>Campus Life </p>
    <p className='hovred'>News & Events </p>
    <p className='hovred'>Contact Us </p> */}
    </div>
    </div>
  );
}

export default Header;