import React from "react";

function University() {
  return (
    <div>
      <h3 className="heading-text heading-gap"> Academic Partners</h3>
      <div className="unimain">
        <div className="row p-4 mt-4 ">
          <div className="col-lg-3  ">
            <div className="form-outline mb-2">
              <input
                type="search"
                id="form1"
                className="form-control "
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="unv1 pb-5 px-3">
              <p className="text-center p-3">Filter</p>
              <hr />

              {/* <span>Select Country</span> */}
              <div className="mt-4">Select Country</div>
              <select className="form-control vodiapicker ">
                <option value="australia" selected>Australia</option>
              </select>
              <div className="mt-4">Select Campus</div>
              <select className="form-control">
                <option value="">Select Campus</option>
                <option value="melbourne">Melbourne</option>
                <option value="brisbane">Brisbane</option>
                <option value="sydney">Sydney </option>
              </select>
              <div className="mt-4">Select Course</div>
              <select className="form-control ">
                <option value="">Select Course</option>
                <option value="information-technology">Information Technology</option>
              </select>
            </div>
          </div>
          <div className="col-lg-8 partner-section">
            <div className="row">
              <div className="col-lg-3">
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
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                    <img
                      src={require("../../asset/img/vu brisbane.png")}
                      alt="Avatar"
                      height={300}
                      className="imgad1"
                    />
                  </div>
                  <div className="container">
                    <p className="text-center">
                      <b>Victoria University</b>
                    </p>
                    <p className="text-center">Brisbane</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default University;
