import { Button } from "react-bootstrap";

function KnowMore() {
  return (
    <>
      <hr className="hr divide-line" />
        <div className="row gx-5 knowmore">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3 className="section-heading">Who We Are</h3>
            <div className="info-section">
              <span className="subheading1">
                ASGS is a premier business education provider that aims at
                bringing you personalised, boutique and exclusive hands-on
                learning experience. We offer UG programs that act as a gateway
                for offshore universitites. We also have short courses and
                certification programs.
                <br></br>
                <br></br>Established in 2015, it has over 30 institutes in
                network and over 30,000+ students have enrolled in the institute
                by March 2022.
              </span>
              <div className="know-more-btn">
                <Button className="knowButton btnd">Know More</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <div className="imggroup">
              <img
                src={require("../../asset/Group.png")}
                alt="Rectangle3254548"
                className="img1know"
              />
            </div>
          </div>
        </div>
    </>
  );
}

export default KnowMore;
