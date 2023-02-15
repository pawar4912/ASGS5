import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../asset/Scss/Style.scss'
import {  NavLink } from "react-router-dom";

function Carousels1() {

  return (
    <Carousel className="cas">
      <Carousel.Item>
        <img height={714}
          className="d-block w-100"
          src={require("../../asset/CS1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption >


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from
 <br></br>
            </h3>
            <h5 className="text002">
Victoria University <br></br>
            </h5>
            <br></br>
            <span className="text">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </span>
            <br></br><br></br>

            <div className="d-flex buttonG">
              <div className="howButton1">
              <NavLink className='text-white navcas1' to='/apply'> Apply Now </NavLink>
              </div>
              
              <div className="howButton2">
                Download Brochure
              </div>
            </div>
          </div>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={714}
          className="d-block w-100"
          src={require("../../asset/CS2-07.jpg")}
          alt="First slide"
        />
        <Carousel.Caption >


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from
 <br></br>
            </h3>
            <h5 className="text002">
Victoria University <br></br>
            </h5>
            <br></br>
            <span className="text">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </span>
            <br></br><br></br>

            <div className="d-flex buttonG">
              <div className="howButton1">
              <NavLink className='text-white navcas1' to='/apply'> Apply Now </NavLink>
              </div>
              <div className="howButton2">
                Download Brochure
              </div>
            </div>
          </div>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={714}
          className="d-block w-100"
          src={require("../../asset/CS3.jpg")}
          alt="First slide"
        />
        <Carousel.Caption >


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from
 <br></br>
            </h3>
            <h5 className="text002">
Victoria University <br></br>
            </h5>
            <br></br>
            <span className="text">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </span>
            <br></br><br></br>

            <div className="d-flex buttonG">
              <div className="howButton1">
              <NavLink className='text-white navcas1' to='/apply'> Apply Now </NavLink>
              </div>
              <div className="howButton2">
                Download Brochure
              </div>
            </div>
          </div>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels1;