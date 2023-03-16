import React from "react";
import Button from "react-bootstrap/Button";

const NewsModel = () => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="university-img">
          <img
            src={require("../../asset/img/universities/Swinburne-University.jpeg")}
            alt="card_image"
          />
        </div>
        <div className="card-content-wrapper">
          <div className="card-info">
            <div className="university-wrapper">
              <div className="university-info">
                <div className="university-name">Artificial Intelligence</div>
              </div>
              <div className="date-section">
                <div className="date-wrapper">
                  <div className="date">15 July</div>
                  <div className="date-info"> Last Enrollment Date</div>
                </div>
                <span className="card-divider"></span>
                <div className="date-wrapper">
                  <div className="date">25 July</div>
                  <div className="date-info"> Last Intake</div>
                </div>
              </div>
              <div className="wrapper-button">
                <Button className="buttonBg btn-rounded btnapply btn btn-primary">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModel;
