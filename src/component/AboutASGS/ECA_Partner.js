import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 10000,
  slidesToShow: 5,
  slidesToScroll: 4,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 1,
};

function ECA_Partner() {
  return (
    <div className="row property_box1">
      <h3 className="section-heading">ECA Partner universities</h3>
      <div className="group1020 d-flex justify-content-evenly margin_top">
        <Slider {...settings} className="justify-content-evenly sdiv1">
          <img
            src={require("../../asset/logo/about/VU.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/LMU.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/SU.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/LJMU.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/UC.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/TU.png")}
            alt="123"
            className="imgreq"
          />
          <img
            src={require("../../asset/logo/about/ECA_image.png")}
            alt="123"
            className="imgreq"
          />
        </Slider>
      </div>
    </div>
  );
}

export default ECA_Partner;
