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

function ECA_Collage() {
  return (
    <div className="row property_box margin_top">
      <h3 className="section-heading">ECA Owned Collages</h3>
      <div className="group1020 d-flex justify-content-evenly margin_top">
        <Slider {...settings} className="justify-content-evenly sdiv1">
          <img
            src={require("../../asset/logo/about/ECA_image.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/els_school.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ECA_image.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/APIC_pacific.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ECA_intership.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ACCLM.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ECA_College.png")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ECAHigher.jpg")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/ECA-Pro.jpg")}
            alt="123"
            className="imgreq"
          />

          <img
            src={require("../../asset/logo/about/CHS-logo.png")}
            alt="123"
            className="imgreq"
          />
        </Slider>
      </div>
    </div>
  );
}

export default ECA_Collage;
