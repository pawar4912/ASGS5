import React from 'react'
import Button from "react-bootstrap/Button";

function ECA_image() {
  return (
    <div className="row  ">
 
    <img
      src={require("../../asset/image 2.jpg")}
      alt="1111"
      className=""
      width={100}
      height={400}
    />

    <div className='position_related'>
    <span className=''>
    <h3 className='margin_pro'>Get In Touch with us inquire about </h3>
    <h3 className='margin_pro'>Our Cources and Product </h3>
    <Button className="buttonBg btn-rounded btnapply margin_pro mt-3">
    Enquire Now
  </Button>
    </span>
    </div>
  
  </div>
  )
}

export default ECA_image
