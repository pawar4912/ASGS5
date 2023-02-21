import React from "react";

const UniversityModel = () => {
  return (
    <>
      <div >
        <div className="card_as">
          <div className="img1 my-4">
            <img
              src={require("../../asset/img/Victoria_1.png")}
              alt="Avatar"
              className="imgad1"
            />
          </div>
          <div className="container">
            <p className="text-center">
              <b>Victoria University</b>
            </p>
            <p className="text-center">Sydney</p>
            <div className="text-center mb-4">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityModel;
