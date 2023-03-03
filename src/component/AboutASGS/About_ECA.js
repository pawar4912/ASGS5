import React from 'react'

function About_ECA() {
  return (
    <div className="row gx-5 knowmore margin_top">
    <div className="col-lg-6 col-md-6 col-sm-12 contant_padding">
      <h3 className="section-heading">About ECA</h3>
      <div className="info-section">
        <span className="subheading1">
        ASGS is a Global Education initiative introduced by Education Centre of Australia (ECA) to bridge the gap between students and their accessibility to world-class standards of International Education. We provide hinh-quality higher education and various certifications of global standards from world's leading universities to students at our International Campuses, Indian Campuses and Online.ms.
         
        </span>
       
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
      <div className="imggroup">
        <img
          src={require("../../asset/logo/about/ECA_image.png")}
          alt="Rectangle3254548"
          className=""
          width={600}
        />
      </div>
    </div>
  </div>
  )
}

export default About_ECA
