import React from "react";
import "./ImageASGS.scss";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function ImageASGS() {
  return (
    <div>
      <div className="row">
        <div className="d-flex bacds ">
          <div className="col-md-7 ">
            <div className="text103 mt-5 mx-5">
              ASGS International Bachelor’s Program
            </div>
            <div className="text111 mt-5 mx-5">
              Start a bachelors degree from home online <br></br>
              programs and finish at ASGS Partnered University
            </div>
            <div className=" mt-5 mx-5">
              <ul className="text110">
                <span>
                  <li>140+ Partner University</li>
                  <br></br>
                  <li>Have upto 40% off on University fees.</li>
                  <br></br>
                  <li>100% study support with ASGS student Nurture team</li>
                  <br></br>
                  <li>
                    End to end student services support in home country and
                    abroad.
                  </li>
                </span>
              </ul>
            </div>

            {/* The Best Start to international on Campus Degree */}
            <div className=" text123 mt-5 mx-5">
              <div className="bords p-2 text-center">
                <img
                  src={require("../../asset/task_alt_FILL1_wght400_GRAD-25_opsz24 1.png")}
                  alt="taskaltFILL1wght400GRAD25opsz2414548"
                />
                <span>The Best Start to international on Campus Degree</span>
              </div>
            </div>

            <div className="group1365 mt-5 mx-5 pb-5">
              <Button className="bordsa p-3">
                {" "}
                <NavLink to="Partner" className="partns">
                  {" "}
                  Browse Our University Partners{" "}
                </NavLink>{" "}
              </Button>
            </div>
          </div>

          <div className="col-md-5">
            <img
              src={require("../../asset/Group 1463 (1).png")}
              alt="Rectangle326724548"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageASGS;
