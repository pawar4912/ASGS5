import React from "react";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProgramModel = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="course-img">
          <img src={require("../../asset/CS1.jpg")} alt="First slide" />
        </div>
        <div className="card-info">
        <div className="university-wrapper">
          <div className="university-info">
            <div className="university-name">{data.university}</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
            mattis odio lacus id nibh.</p>
          </div>
            <div className="wrapper-button">
              <div className="brochure-button"> <FaDownload />Download Broacher</div>
              <div className="apply-button" onClick={() => navigate('/prog')}> Apply Now </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramModel;
