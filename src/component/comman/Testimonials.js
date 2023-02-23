import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonials(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="testiarr ">
        <h3 className="section-heading">Students {props.name}</h3>

        <div className="d-flex">
          <Slider {...settings}>
            <div className="wrapper  widt">
              <div className="text-center">
                <img
                  src={require("../../asset/istockphoto-1139495117-612x612 1.png")}
                  className="imgper1"
                ></img>
              </div>
              <div className="description">
                <p className="mt-3">
                  Learning at Parul University has provided me with the much
                  needed learning experience which has not only shaped my
                  knowledge, but it has also provided me with the most enriching
                  global experience
                </p>
                <br></br>
                <span className="nametest">Diksha Patel</span>
              </div>
            </div>
            <div className="wrapper  widt">
              <div className="text-center">
                <img
                  src={require("../../asset/istockphoto-1139495117-612x612 1.png")}
                  className="imgper1"
                ></img>
              </div>
              <div className="description">
                <p className="mt-3">
                  Learning at Parul University has provided me with the much
                  needed learning experience which has not only shaped my
                  knowledge, but it has also provided me with the most enriching
                  global experience
                </p>
                <br></br>
                <span className="nametest">Diksha Patel</span>
              </div>
            </div>
            <div className="wrapper  widt ">
              <div className="text-center">
                <img
                  src={require("../../asset/istockphoto-1139495117-612x612 1.png")}
                  className="imgper1"
                ></img>
              </div>
              <div className="description">
                <p className="mt-3">
                  Learning at Parul University has provided me with the much
                  needed learning experience which has not only shaped my
                  knowledge, but it has also provided me with the most enriching
                  global experience
                </p>
                <br></br>
                <span className="nametest">Diksha Patel</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <hr className="hr divide-line" />
    </>
  );
}

export default Testimonials;
