import "./Recruiter.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Recruiters(){

  const settings = {
    dots: false,
    infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
  };

    return(

   <div className="mainfile">
<div className="dcsd mb-5">
         <h3 className="oure">Our Top Recruiters</h3>
           </div>
          <div className="group1020 d-flex justify-content-evenly">
          <Slider {...settings} className="justify-content-evenly sdiv1">
            <img
              src={require('../../asset/google.png')}
              alt="google2014548"
              className="imgreq" 
            />
            <img 
             src={require('../../asset/samsung.png')}
              alt="download114548"
              className="imgreq"
            
            />
          
              <img 
                  src={require('../../asset/walmart.png')}
                alt="Vector4548"
                className="imgreq"
         
              />
             
             
           
            <img
               src={require('../../asset/reebok.png')}
              alt="IMAGE32144714548"
              className="imgreq"
           
            />
            <img 
               src={require('../../asset/Sony.png')}
              alt="Sonylogo14548"
              className="imgreq"
             
            />
            <img 
        src={require('../../asset/lenovo.png')}
              alt="images14548"
              className="imgreq"
          
            />

            </Slider>
          </div>
        
          </div>
    );
}

export default Recruiters;
