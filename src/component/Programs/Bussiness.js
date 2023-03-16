import React from "react";
import Carousel from "better-react-carousel";
import ProgramModel from "./ProgramModel";

function Bussiness() {
  const marketing = [
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      image: require("../../asset/img/universities/Swinburne-University.jpeg"),
      campusLogos: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
  ];
  const finance = [
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      image: require("../../asset/img/universities/Charles-Sturt.jpg"),
      campusLogos: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  const generalManagement = [
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      image: require("../../asset/img/universities/Swinburne-University.jpeg"),
      campusLogos: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
  ];
  const administration = [
    {
      image: require("../../asset/img/universities/University-of- Tasmania.jpeg"),
      campusLogos: require("../../asset/logo/campus/University-of-Tasmania.jpg"),
      university: "University Of Tasmania",
    },
    {
      image: require("../../asset/img/universities/VU-Sydney.jpg"),
      campusLogos: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
  ];
  const humanResource = [
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      image: require("../../asset/img/universities/Charles-Sturt.jpg"),
      campusLogos: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  return (
    <div>
      <div className="business-programs">
        <img
          className="heading-banner"
          src={require("../../asset/logo/programs/Business.jpg")}
          alt="Business"
        />
        <div className="heading-info">
          <h3 className="heading-text">Business Programs</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
            mattis odio lacus id nibh.
          </p>
        </div>
      </div>
      <div id="programs">
        <div className="course-section">
          <div className="course-wrapper">
            <div className="course">
              <div className="course-img">
                <img
                  className="course-banner"
                  src={require("../../asset/logo/courses/MARKETING.jpg")}
                  alt="MARKETING"
                />
              </div>
              <div className="course-info">
                <h3>Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                  finibus erat, ac mattis odio lacus id nibh. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex
                  eget bibendum molestie, lectus metus finibus erat, ac mattis
                  odio lacus id nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse aliquam, ex eget bibendum
                  molestie, lectus metus finibus erat, ac mattis odio lacus id
                  nibh
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="programs-items-wrapper">
              {marketing.map((data, index) => (
                <ProgramModel data={data} key={index.toString()} />
              ))}
            </div>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <div className="course">
              <div className="course-img">
                <img
                  className="course-banner"
                  src={require("../../asset/logo/courses/FINANCE.jpg")}
                  alt="FINANCE"
                />
              </div>
              <div className="course-info">
                <h3>Finance </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                  finibus erat, ac mattis odio lacus id nibh. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex
                  eget bibendum molestie, lectus metus finibus erat, ac mattis
                  odio lacus id nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse aliquam, ex eget bibendum
                  molestie, lectus metus finibus erat, ac mattis odio lacus id
                  nibh
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="programs-items-wrapper">
              {finance.map((data, index) => (
                <ProgramModel data={data} key={index.toString()} />
              ))}
            </div>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <div className="course">
              <div className="course-img">
                <img
                  className="course-banner"
                  src={require("../../asset/logo/courses/General-Management.jpg")}
                  alt="General-Management"
                />
              </div>
              <div className="course-info">
                <h3>General Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                  finibus erat, ac mattis odio lacus id nibh. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex
                  eget bibendum molestie, lectus metus finibus erat, ac mattis
                  odio lacus id nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse aliquam, ex eget bibendum
                  molestie, lectus metus finibus erat, ac mattis odio lacus id
                  nibh
                </p>
              </div>
            </div>
          </div>

          <div className="programs-items-wrapper">
            {generalManagement.map((data, index) => (
              <ProgramModel data={data} key={index.toString()} />
            ))}
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <div className="course">
              <div className="course-img">
                <img
                  className="course-banner"
                  src={require("../../asset/logo/courses/Data-analytics.png")}
                  alt="Data-analytics"
                />
              </div>
              <div className="course-info">
                <h3>Administration </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                  finibus erat, ac mattis odio lacus id nibh. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex
                  eget bibendum molestie, lectus metus finibus erat, ac mattis
                  odio lacus id nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse aliquam, ex eget bibendum
                  molestie, lectus metus finibus erat, ac mattis odio lacus id
                  nibh
                </p>
              </div>
            </div>
          </div>

          <div className="programs-items-wrapper">
            {administration.map((data, index) => (
              <ProgramModel data={data} key={index.toString()} />
            ))}
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <div className="course">
              <div className="course-img">
                <img
                  className="course-banner"
                  src={require("../../asset/logo/courses/Human-Resource.jpg")}
                  alt="Human-Resource"
                />
              </div>
              <div className="course-info">
                <h3> Human Resource </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                  finibus erat, ac mattis odio lacus id nibh. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex
                  eget bibendum molestie, lectus metus finibus erat, ac mattis
                  odio lacus id nibh. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Suspendisse aliquam, ex eget bibendum
                  molestie, lectus metus finibus erat, ac mattis odio lacus id
                  nibh
                </p>
              </div>
            </div>
          </div>

          <div className="programs-items-wrapper">
            {humanResource.map((data, index) => (
              <ProgramModel data={data} key={index.toString()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bussiness;
