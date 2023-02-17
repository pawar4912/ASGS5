import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  NavLink } from "react-router-dom";

function Carousels1() {

  return (
    <Carousel className="cas">
      <Carousel.Item>
        <img 
          className="d-block w-100 imgh"
          src={require("../../asset/CS1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className='margd'>


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from
                      </h3>
            <h5 className="text002">
                     Victoria University 
            </h5>
            
            <div className="text teds texts1">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </div>
          

            <div className="d-flex buttonG teds">
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
        <img 
          className="d-block w-100 imgh"
          src={require("../../asset/CS2-07.jpg")}
          alt="First slide"
        />
        <Carousel.Caption >


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from

            </h3>
            <h5 className="text002">
Victoria University
            </h5>
       
            <div className="text teds texts1">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </div>
          

            <div className="d-flex buttonG teds">
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
        <img 
          className="d-block w-100 imgh"
          src={require("../../asset/CS3.jpg")}
          alt="First slide"
        />
        <Carousel.Caption >


          <div className="toptext">
            
            <h3 className="text002">Cyber Security from
            </h3>
            <h5 className="text002">
Victoria University 
            </h5>
           
            <div className="text teds texts1">
              Build your career by enrolling into an advance<br></br> graduation or post graduation program and<br></br> study offshore.
            </div>
         

            <div className="d-flex buttonG teds">
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