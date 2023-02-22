import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProgramModel = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="university-img">
          <img src={data.image} alt={data.university} />
        </div>
        <div className="card-content-wrapper">
          <div className="card-info">
            <div className="university-wrapper">
              <div className="university-info">
                <div className="university-name">{data.university}</div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                finibus erat, ac mattis odio lacus id nibh.
              </p>
            </div>
            <div className="wrapper-button">
              <Button
                className="buttonBg btn-rounded btnapply btn btn-primary"
                onClick={() => navigate("/prog")}
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModel;
