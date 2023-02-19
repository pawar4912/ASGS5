import React from "react";
import Carousel from "better-react-carousel";
import ProgramModel from "./ProgramModel";

function Itprograms() {
  const cyberSecurity = [
    {
      campusLogos: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      campusLogos: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
  ];
  const dataScience = [
    {
      campusLogos: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University",
    },
    {
      campusLogos: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
    {
      campusLogos: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
  ];
  const informationTechnology = [
    {
      campusLogos: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      campusLogos: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      campusLogos: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University, Melbourne",
    },
  ];
  const dataAnalytics = [
    {
      campusLogos: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      campusLogos: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      campusLogos: require("../../asset/logo/campus/University-of-Tasmania.jpg"),
      university: "University Of Tasmania",
    },
  ];
  const artificialIntelligence = [
    {
      campusLogos: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University",
    },
    {
      campusLogos: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  return (
    <div>
      <div className="it-programs">
        <h3 className="heading-text">Information Technology</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
          mattis odio lacus id nibh.
        </p>
      </div>
      <div id="information-technology">
        <div className="course-section">
          <div className="course-wrapper">
            <img
              className="course-banner"
              src={require("../../asset/logo/courses/Cyber-Security.jpg")}
              alt="cyber-security"
            />
            <div className="course">
              <h3>Cyber Security</h3>
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
              {cyberSecurity.map((data, index) => (
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
              <h3>Data Science </h3>
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
              {dataScience.map((data, index) => (
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
              <h3>Information Technology</h3>
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
              {informationTechnology.map((data, index) => (
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
              <h3>Data Analytics </h3>
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
              {dataAnalytics.map((data, index) => (
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
              <h3>Artificial Intelligence </h3>
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
              {artificialIntelligence.map((data, index) => (
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

export default Itprograms;
