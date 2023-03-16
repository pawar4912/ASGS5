import React from "react";
import ProgramModel from "./ProgramModel";

function Itprograms() {
  const cyberSecurity = [
    {
      image: require("../../asset/img/universities/VU-Sydney.jpg"),
      logo: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      image: require("../../asset/img/universities/vu-sydneys.jpg"),
      logo: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      logo: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
  ];
  const dataScience = [
    {
      image: require("../../asset/img/universities/VU-Melbourne.jpg"),
      logo: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University, Melbourne",
    },
    {
      image: require("../../asset/img/universities/Swinburne-University.jpeg"),
      logo: require("../../asset/logo/campus/Swinburne.jpg"),
      university: "Swinburne University",
    },
    {
      image: require("../../asset/img/universities/Canberra.jfif"),
      logo: require("../../asset/logo/campus/University-of-Canberra.jpg"),
      university: "University Of Canberra",
    },
  ];
  const informationTechnology = [
    {
      image: require("../../asset/img/universities/VU-Sydney.jpg"),
      logo: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      image: require("../../asset/img/universities/vu-sydneys.jpg"),
      logo: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      image: require("../../asset/img/universities/VU-Melbourne.jpg"),
      logo: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University, Melbourne",
    },
  ];
  const dataAnalytics = [
    {
      image: require("../../asset/img/universities/VU-Sydney.jpg"),
      logo: require("../../asset/logo/campus/VU-Sydney.jpg"),
      university: "Victoria University, Sydney",
    },
    {
      image: require("../../asset/img/universities/vu-sydneys.jpg"),
      logo: require("../../asset/logo/campus/VU-Brisbane.jpg"),
      university: "Victoria University, Brisbane",
    },
    {
      image: require("../../asset/img/universities/University-of- Tasmania.jpeg"),
      logo: require("../../asset/logo/campus/University-of-Tasmania.jpg"),
      university: "University Of Tasmania",
    },
  ];
  const artificialIntelligence = [
    {
      image: require("../../asset/img/universities/VU-Melbourne.jpg"),
      logo: require("../../asset/logo/campus/VU-Melbourne.jpg"),
      university: "Victoria University, Melbourne",
    },
    {
      image: require("../../asset/img/universities/Charles-Sturt.jpg"),
      logo: require("../../asset/logo/campus/Charles-Sturt.jpg"),
      university: "Charles Sturt University",
    },
  ];
  return (
    <div>
      <div className="it-programs">
        <img
          className="heading-banner"
          src={require("../../asset/logo/programs/IT.jpg")}
          alt="IT"
        />
        <div className="heading-info">
          <h3 className="heading-text">Information Technology</h3>
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
                  src={require("../../asset/logo/courses/Cyber-Security.jpg")}
                  alt="cyber-security"
                />
              </div>
              <div className="course-info">
                <h3>Cyber Security</h3>
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
              {cyberSecurity.map((data, index) => (
                <ProgramModel data={data} key={index} />
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
                  src={require("../../asset/logo/courses/Data-Science.jpg")}
                  alt="cyber-security"
                />
              </div>
              <div className="course-info">
                <h3>Data Science </h3>
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
              {dataScience.map((data, index) => (
                <ProgramModel data={data} key={index} />
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
                  src={require("../../asset/logo/courses/artifical-intelligence.jpg")}
                  alt="artifical-intelligence"
                />
              </div>
              <div className="course-info">
                <h3>Artificial Intelligence </h3>
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
              {artificialIntelligence.map((data, index) => (
                <ProgramModel data={data} key={index} />
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
                  src={require("../../asset/logo/courses/Information-Technology.jpg")}
                  alt="Information-Technology"
                />
              </div>
              <div className="course-info">
                <h3>Information Technology</h3>
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
              {informationTechnology.map((data, index) => (
                <ProgramModel data={data} key={index} />
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
                  src={require("../../asset/logo/courses/Data-analytics.png")}
                  alt="Data-analytics"
                />
              </div>
              <div className="course-info">
                <h3>Data Analytics </h3>
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
              {dataAnalytics.map((data, index) => (
                <ProgramModel data={data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itprograms;
