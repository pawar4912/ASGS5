import { Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-grid';
import "./KnowMore.scss"


function KnowMore() {

  return (
    <div>
      {/* <Container>
    <Row>
      <Col sm={6}>
        <h1 className="headingMain12"> Who We Are</h1>
        <p className="subheading1"> ASGS is a premier business education provider that aims at bringing you personalised, boutique and exclusive hands-on learning experience. We offer UG programs that act as a gateway for offshore universitites. We also have short courses and certification programs.
  <br></br><br></br>Established in 2015, it has over 30 institutes in network and over 30,000+ students have enrolled in the institute by March 2022.</p>
  <Button className="knowButton">Know More >></Button>
      </Col>
      <Col sm={6}>
        <div>
      <img
             src={require("../../asset/Rectangle 325.png")}
            alt="Rectangle3254548"
            className="img1know"

          />
           <img
            src={require("../../asset/Rectangle 327.png")}
            alt="Rectangle3274548"
              className="img2know"
          />

          <img
            src={require("../../asset/Rectangle 326.png")}
            alt="Rectangle3264548"
            className="img3know"
          />
          </div>
      </Col>
    </Row>
  </Container> */}



      <div className="row ">
        <hr className="hr mt-5"></hr>
        <div className="row mt-5 gx-5 knowmore">
          <div className="col-lg-6 col-md-6 col-sm-12" >
            <span className="headingMain12">
              Who We Are
            </span>
            <br></br><br></br>
            <span className="subheading1">
              ASGS is a premier business education provider that aims at bringing you personalised, boutique and exclusive hands-on learning experience. We offer UG programs that act as a gateway for offshore universitites. We also have short courses and certification programs.
              <br></br><br></br>Established in 2015, it has over 30 institutes in network and over 30,000+ students have enrolled in the institute by March 2022.
            </span>
            <br></br><br></br>
            <Button className="knowButton btnd mb-5">Know More</Button>
            <br></br>
            <br></br>
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
        <hr className="hr"></hr>
      </div>
    </div>
  );


}

export default KnowMore;