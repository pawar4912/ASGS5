import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import '../../asset/Scss/Style.scss'

function Carousels1() {

    return(
 <Carousel className="cas">
 <Carousel.Item>
   <img  height={714}
     className="d-block w-100"
     src={require("../../asset/Rectangle 380.png")}
     alt="First slide"
   />
   <Carousel.Caption >

     
         <div className="toptext">
            <h6>Welcome In</h6>
         <h3 className="text002">Victoria university <br></br>
</h3>
     <br></br>
         <span className="text">
                Build your career by enrolling into an advance graduation or post graduation program and study offshore. 
           </span>
           <br></br><br></br>

        <div className="d-flex buttonG">
           <div className="howButton1">
            Apply Now
           </div>
           <div className="howButton2">
             Download Brochure
           </div>
           </div>
           </div>
         
       
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img  height={714}
     className="d-block w-100 "
     src={require("../../asset/Rectangle321.png")}
     alt="First slide"
   />
   <Carousel.Caption >

     
         <div className="toptext">
         <h3 className="text002">Dream of  Global <br></br>
Studies Begin Here</h3>
     <br></br>
         <span className="text">

           ASGS is a home to students wanting to study with <br></br> world’s top
           ranked universities with ease and <br></br>affordability.
           </span>
           <br></br><br></br>

           <div className="howButton">
             How Does it Work
           </div>
           </div>
         
       
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img  height={714}
     className="d-block w-100 "
     src={require("../../asset/Rectangle321.png")}
     alt="First slide"
   />
   <Carousel.Caption >

     
         <div className="toptext">
         <h3 className="text002">Dream of  Global <br></br>
Studies Begin Here</h3>
     <br></br>
         <span className="text">

           ASGS is a home to students wanting to study with <br></br> world’s top
           ranked universities with ease and <br></br>affordability.
           </span>
           <br></br><br></br>

           <div className="howButton">
             How Does it Work
           </div>
           </div>
         
       
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>
    );
}

export default Carousels1;