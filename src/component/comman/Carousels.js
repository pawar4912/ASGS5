import Carousel from "react-bootstrap/Carousel";
import  { handleClickScroll } from '../../common/utils/scrolls'
import React from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";

function Carousels() {
  const navigate = useNavigate()
  const handleMove = () => {
    window.scrollTo({ top: 2400, behavior: "smooth" }); // here it goes
  };

  return (
    <Carousel className="cas">
      <Carousel.Item>
        <img
          height={714}
          className="d-block w-100 "
          src={require("../../asset/image 1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="toptext">
            <h3 className="text0021">
              Start At Home 
          
            </h3>
            <h3 className="text0021">
              Finish On Campus
            </h3>
            <br></br>
            <span className="text21">
              EOL is the online learning division <br></br>
              of Education Center of Australia
            </span>
            <br></br>
            <br></br>

            <Button className="learnButton" onClick={() => navigate('international-bachelors')}>
              Learn More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={714}
          className="d-block w-100 "
          src={require("../../asset/image 2.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="toptext">
            <h3 className="text0021">
            Get Your Masters
            </h3>
            <h3 className="text0021">
            Degree Online
            </h3>
            <br></br>
            <span className="text21">
              EOL is the online learning division <br></br>
              of Education Center of Australia
            </span>
            
            <br></br>
            <br></br>

            <div className="learnMore2" onClick={() => navigate('international-masters')}>Learn More</div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={714}
          className="d-block w-100 "
          src={require("../../asset/Rectangle321.png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="toptext">
            <h3 className="text002">
              Dream of Global <br></br>
              Studies Begin Here
            </h3>
            <br></br>
            <span className="text">
              ASGS is a home to students wanting to study with <br></br> world’s
              top ranked universities with ease and <br></br>affordability.
            </span>
            <br></br>
            <br></br>

            <div onClick={() => handleClickScroll('#videohs')} className="howButton">How Does it Work</div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
