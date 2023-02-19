import React from "react";
import Carousel from "better-react-carousel";
import ProgramModel from "./ProgramModel";

function Bussiness() {
  const marketing = [
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      campusLogos: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
  ];
  const finance = [
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      campusLogos: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  const generalManagement = [
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      campusLogos: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
  ];
  const administration = [
    {
      campusLogos: require("../../asset/logo/campus/University-of-Tasmania.jpg"),
      university: "University Of Tasmania",
    },
    {
      campusLogos: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
  ];
  const humanResource = [
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
    {
      campusLogos: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  return (
    <div>
        <div className="business-programs">
          <h3 className="heading-text">Business Programs</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
            mattis odio lacus id nibh.
          </p>
        </div>
        <div id="programs">
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/Cyber-Security.jpg")}
              alt="cyber-security"
            />
            <div className="course">
              <h3>Marketing</h3>
              <div className="course-info">
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

          <div className="row">
            <Carousel cols={3} rows={1} gap={40} loop>
              {marketing.map((data, index) => (
                <Carousel.Item className="column" key={index.toString()}>
                  <ProgramModel data={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/Data-Science.jpg")}
              alt="cyber-security"
            />
            <div className="course">
              <h3>Finance </h3>
              <div className="course-info">
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

          <div className="row">
            <Carousel cols={3} rows={1} gap={40} loop>
              {finance.map((data, index) => (
                <Carousel.Item className="column" key={index.toString()}>
                  <ProgramModel data={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/Information-Technology.jpg")}
              alt="Information-Technology"
            />
            <div className="course">
              <h3>General Management</h3>
              <div className="course-info">
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

          <div className="row">
            <Carousel cols={3} rows={1} gap={40} loop>
              {generalManagement.map((data, index) => (
                <Carousel.Item className="column" key={index.toString()}>
                  <ProgramModel data={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/Data-analytics.jpg")}
              alt="Data-analytics"
            />
            <div className="course">
              <h3>Administration </h3>
              <div className="course-info">
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

          <div className="row">
            <Carousel cols={3} rows={1} gap={40} loop>
              {administration.map((data, index) => (
                <Carousel.Item className="column" key={index.toString()}>
                  <ProgramModel data={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/artifical-intelligence.jpg")}
              alt="artifical-intelligence"
            />
            <div className="course">
              <h3> Human Resource </h3>
              <div className="course-info">
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

          <div className="row">
            <Carousel cols={3} rows={1} gap={40} loop>
              {humanResource.map((data, index) => (
                <Carousel.Item className="column" key={index.toString()}>
                  <ProgramModel data={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bussiness;
