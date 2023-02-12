import React from "react";
import "./Video.scss";

function Video() {
  return (
    <div className="videoadj row" id="#videohs">
      <h3 className="section-heading">How Does It Work</h3>
      <div className="d-flex justify-content-center video-section ">
        <iframe
          height="617"
          src="https://www.youtube.com/embed/2nUIwx6CweA"
          title="Australia is The Best Country To Study ABROAD in 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rectangle367"
        ></iframe>
      </div>
    </div>
  );
}
export default Video;
