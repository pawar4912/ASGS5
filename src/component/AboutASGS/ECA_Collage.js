import React from 'react'

function ECA_Collage() {
  return (
    <div className="row property_box">
    <h3 className="section-heading mb-3">ECA Owned Collages</h3>
    <div className="card ECA_card_border">
      <div className="d-flex mt-4 course_direction">
        <div className="col-lg-2 mx-5">
          <div className="">
            <img  src={require("../../asset/logo/about/ECA_image.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/els_school.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-2 mx-4">
          <div className="">
            <img  src={require("../../asset/logo/about/ECA_image.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/APIC_pacific.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-2 mx-4">
          <div className="">
            <img  src={require("../../asset/logo/about/ECA_intership.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/ACCLM.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-2 mx-4">
          <div className="">
            <img  src={require("../../asset/logo/about/ECA_College.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/ECAHigher.jpg")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-2 mx-4">
          <div className="">
            <img  src={require("../../asset/logo/about/ECA-Pro.jpg")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/CHS-logo.png")} alt="123" height={40} width={100} />
          </div>
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default ECA_Collage
