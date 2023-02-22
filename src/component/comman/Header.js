import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import SearchBar from "../../common/components/SearchBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-wrapper">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        className="navbar-nav"
      >
        <Container>
          <Navbar.Brand className="imgra">
            <NavLink to='/'>           
             <img
              src={require("../../asset/ASGS-02.jpg")}
              height={69}
              alt="logo"
            />
            </NavLink>

          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="submenu">
              <NavLink className="sudes" to="/Sucess">
                Success Stories
              </NavLink>
              <NavLink className="sudes" to="/Schol">
                Scholarships
              </NavLink>
              <NavLink className="sudes" to="/Study">
                Study Center
              </NavLink>
              <SearchBar />
              <Button
                className="buttonBg btn-rounded btnapply"
                onClick={() => navigate("apply")}
              >
                Apply Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-evenly navsec">
        <NavLink className="text-white" to="/">
          Home
        </NavLink>
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
          <Dropdown.Item>
            <NavLink to="/international-masters">
              International Masters{" "}
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/international-short-courses">
              International Short Courses{" "}
            </NavLink>
          </Dropdown.Item>
        </Dropdown>
        <NavLink className="text-white" to="/academic-partner">
          Academics Partners
        </NavLink>
        <NavLink className="text-white" to="/KnowMore">
          About ASGS
        </NavLink>
        <NavLink className="text-white" to="/News">
          News & Events
        </NavLink>
        <NavLink className="text-white" to="/apply">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
