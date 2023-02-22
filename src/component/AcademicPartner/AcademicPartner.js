import React from "react";
import UniversityModel from "./UniversityModel";

function AcademicPartner() {
  const universities = [
    {
      logo: require("../../asset/logo/UniversityLogos/CharlesSturt.png"),
      name: 'Charles Sturt',
      premium: false
    },
    {
      logo: require("../../asset/logo/UniversityLogos/Liverpool.png"),
      name: 'Liverpool John Moores',
      premium: false
    },
    {
      logo: require("../../asset/logo/UniversityLogos/Swinburne.png"),
      name: 'Swinburne University',
      premium: false
    },
    {
      logo: require("../../asset/logo/UniversityLogos/VU-Brisbane.png"),
      name: 'Victoria University, Brisbane',
      premium: true
    },
    {
      logo: require("../../asset/logo/UniversityLogos/VU-Melbourne.png"),
      name: 'Victoria University, Melbourne',
      premium: false
    },
    {
      logo: require("../../asset/logo/UniversityLogos/VU-Sydney.png"),
      name: 'Victoria University, Sydney',
      premium: true
    }
  ]
  return (
    <div>
      <div className="it-programs">
        <img
          className="heading-banner"
          src={require("../../asset/logo/programs/IT.jpg")}
          alt="IT"
        />
        <div className="heading-info">
          <h3 className="heading-text"> Academic Partners</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
            mattis odio lacus id nibh.
          </p>
        </div>
      </div>
      <div className="academic-partner-main">
        <div className="container-wrapper">
          <div className="filter ">
            <div className="form-outline mb-2">
              <input
                type="search"
                id="form1"
                className="form-control "
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="unv1 pb-4 px-3">
              <p className="text-center pt-2">Filter</p>
              <hr className="seprater-line"/>

              {/* <span>Select Country</span> */}
              <div className="">Select Country</div>
              <select className="form-control vodiapicker ">
                <option value="australia" selected>
                  Australia
                </option>
              </select>
              <div className="mt-4">Select Programs</div>
              <select className="form-control">
                <option value="">Select Programs</option>
                <option value="Information Technology">Information Technology</option>
               <option value="International Masters">International Masters</option>
                <option value="International Short Courses">International Short Courses </option>
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
                <option value="information-technology">
                  Information Technology
                </option>
              </select>
            </div>
          </div>
          <div className="col-lg-8 partner-section">
          
            <div className="items-wrapper">
              {universities.map((item, index)=> (
                <UniversityModel data={item} key={index.toString()}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AcademicPartner;
