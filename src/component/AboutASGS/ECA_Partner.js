import React from 'react'

function ECA_Partner() {
  return (
    <div className="row property_box1">
    <h3 className="section-heading mb-3">ECA Partner universities</h3>
    <div className="card ECA_card_border mt-3">
      <div className="d-flex mt-4 course_direction">
        <div className="col-lg-3 me-1">
          <div className="">
            <img  src={require("../../asset/logo/about/VU.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/LMU.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-3 mx-4">
          <div className="">
            <img  src={require("../../asset/logo/about/SU.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/LJMU.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-3 mx-3">
          <div className="">
            <img  src={require("../../asset/logo/about/UC.png")} alt="123" height={40} width={100} />
          </div>
          <div className=" mt-3 mb-4">
          <img  src={require("../../asset/logo/about/TU.png")} alt="123" height={40} width={100} />
          </div>
        </div>
        <div className="col-lg-3 me-5">
          <div >
            <img  className="mx-3" src={require("../../asset/logo/about/ECA_image.png")} alt="123" height={40} width={100} />
          </div>
         
        </div>
       
     
      </div>
    </div>
    </div>
  )
}

export default ECA_Partner
