import React from "react";

function ECA_Message() {
  return (
    <div className="row">
      <div className="d-flex bacds ">
        <div className="col-lg-6">
          <div className="card_text mt-5 mx-5">
            Message from CEO & Founder ECA - Rupesh Singh
          </div>
          <p className="text_size mt-3 mx-5">
            "No one can steal it, no authority can snatch, not divided in
            relatives, not heavy to carry, as you consume or spend or share, it
            increases, Education (Vidhya) is the best wealth among all the
            wealth anyone can have"
          </p>
          <p className="text_size1 mt-1 mx-5 pb-5">
            India was a pioneer in providing great education. But in course of
            time India lost that charm. To bring the best of both worlds for the
            youth of India, ASGS brings international education to India and
            Indian youth to the world at affordable costs.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src={require("../../asset/Rectangle321.png")}
            className=" mt-5 pb-5"
            alt="Rectangle326724548"
            style={{ height: "90%", width: "95%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ECA_Message;
