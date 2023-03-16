import React from "react";
import NewsModel from "./NewsModel";
import EventModel from "./EventModel";

function News() {
  return (
    <>
      <div className="w-100">
        <div className="it-programs">
          <img
            className="heading-banner"
            src={require("../../asset/logo/programs/IT.jpg")}
            alt="IT"
          />
          <div className="heading-info">
            <h3 className="heading-text">News And Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse aliquam, ex eget bibendum molestie, lectus metus
              finibus erat, ac mattis odio lacus id nibh.
            </p>
          </div>
        </div>
      </div>
      <div className="news">
        <div className=" row text-center">
          <h3 className="section-heading ">Important Dates</h3>
        </div>
        <div className="row margin_top margin_bottom">
          <div className="course-info">
            <h3> Information Technology </h3>
          </div>
        </div>
        <div className="items-wrapper">
          <NewsModel />
          <NewsModel />
          <NewsModel />
        </div>
        <div className="row margin_top margin_bottom">
          <div className="course-info">
            <h3> Business </h3>
          </div>
        </div>
        <div className="items-wrapper">
          <NewsModel />
          <NewsModel />
          <NewsModel />
        </div>
      </div>
      <div className="background-odd events">
        <div className=" row text-center margin_bottom">
          <h3 className="section-heading ">Events</h3>
        </div>
        <div className="event-items-wrapper">
          <EventModel />
          <EventModel />
          <EventModel />
        </div>
      </div>
    </>
  );
}
export default News;
