import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from "react-bootstrap/Button";
import "./header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        className="navbar-nav"
      >
        <Container>
          <Navbar.Brand href="#home" className="imgra">
            <img src={require("../../asset/ASGS-02.jpg")} height={69} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="submenu">
              <Nav.Link className="suces">
                <NavLink className="sudes" to="/Sucess">
                  Success Stories
                </NavLink>
              </Nav.Link>
              <Nav.Link className="suces" eventKey={2} href="#memes">
                <NavLink className="sudes" to="/Schol">
                  Scholarships
                </NavLink>
              </Nav.Link>

              <Nav.Link className="suces">
                <NavLink className="sudes" to="/Study">
                  Study Center
                </NavLink>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="buttonBg btn-rounded btnapply suces">
                  <NavLink className="text-white" to="/apply">
                    Apply Now
                  </NavLink>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-evenly navsec">
        <span className="hovred">
          <NavLink className="text-white" to="/">
            Home
          </NavLink>
        </span>
        {/*.................. new code start */}
        <div>
          <Dropdown title="Our Programs">
            <Dropdown.Menu title="International Bachelors">
              <Dropdown.Item>
                <NavLink className="fond" to="/itprograms">
                  Information Technology
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/bussiness"> Business </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item> International Masters </Dropdown.Item>
            <Dropdown.Item> International Short Courses </Dropdown.Item>
          </Dropdown>
        </div>

        {/* 2nd code */}
        <span className="hovred">
          <NavLink className="text-white" to="/uni">
          Academics Partners
          </NavLink>
        </span>
        <span className="hovred">
          <NavLink className="text-white" to="/KnowMore">
            About ASGS
          </NavLink>
        </span>
        <span className="hovred">
          <NavLink className="text-white" to="/News">
            News & Events
          </NavLink>
        </span>
        <span className="hovred">
          <NavLink className="text-white" to="/apply">
            Contact Us
          </NavLink>
        </span>
        {/* <p className='hovred'>Campus Life </p>
    <p className='hovred'>News & Events </p>
    <p className='hovred'>Contact Us </p> */}
      </div>
    </div>
  );
}

export default Header;
