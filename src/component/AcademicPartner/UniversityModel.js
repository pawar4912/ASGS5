import React from "react";

const UniversityModel = ({ data }) => {
  return (
    <>
      <div className="card_as">
        {data.premium ? (
          <div className="ribbon-wrapper">
            <p class="ribbon">
              <span class="text">Premium</span>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="img1">
          <img src={data.logo} alt="Avatar" className="university-logo" />
        </div>
        <div className="card-info">
          <p className="text-center">
            <b>{data.name}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default UniversityModel;
