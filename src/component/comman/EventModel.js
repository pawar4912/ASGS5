import React from "react";

const EventModel = () => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="university-img">
          <img
            src={require("../../asset/img/universities/Canberra.jfif")}
            alt="card_image"
          />
        </div>
        <div className="date-section">
          <div className="date-wrapper">
            <div className="date">15</div>
            <spam className="month">July</spam>
          </div>
          <div className="information-section">
            <div className="event-hading"> SQA Team </div>
            <div className="event-text"> Visit at ECA Global, Ahmadabad Office </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModel;
