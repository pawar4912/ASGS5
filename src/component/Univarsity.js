import React from 'react'
import { Container, Row, Col } from "react-grid-system";
import Testimonials from './comman/Testimonials';
import { FiDownload } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import { MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardGroup} from 'mdb-react-ui-kit';




function Univarsity() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
      };
    
  return (
    <div>
       <Container className="backimg" style={{ maxWidth: "none" }}>
        <Row>
          <Col sm={12}>
            <div className="text_height">
              <div>
                <h2>
                  {" "}
                  <b>Welcome to </b>
                </h2>
              </div>
              <div>
                <h1>Victoria University</h1>
              </div>
              <div>
                <h2>Build your career by enrolling into an advance</h2>
                <h2>graduation or post graduation program and</h2>
                <h2>study offshore.</h2>
              </div>
              <div className="mt-3">
                <div >
                    <button className="apply_color">Apply Now</button>
                    <button className="downlod_background"><FiDownload className='mx-2'/>  Download Brochure</button>
                 
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    
      {/* lorem code start  */}
      <div className="row University_property_box">
        <div className="card card_border">
          <div className="d-flex mt-4 mb-5 course_direction">
            <div className="col-lg-3  card-padding">
            <div class = "vertical"></div> 
                  <h3 className='mt-1'>Lorem Ipsum</h3>
                  <p className='mt-3'>Lorem ipsum color sit amet,</p>
                  <p>consectetur adipiscing elit.</p>
                  
            </div>
           
            <div className="col-lg-3  card-padding">
            <div class = "vertical_first"></div> 
                  <h3 className='mt-1'>Lorem Ipsum</h3>
                  <p className='mt-3'>Lorem ipsum color sit amet,</p>
                  <p>consectetur adipiscing elit.</p>
            </div>
            
            <div className="col-lg-3  card-padding">
            <div class = "vertical_sec"></div> 
                  <h3 className='mt-1'>Lorem Ipsum</h3>
                  <p className='mt-3'>Lorem ipsum color sit amet,</p>
                  <p>consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-  card-padding">
                  <h3 className='mt-1'>Lorem Ipsum</h3>
                  <p className='mt-3'>Lorem ipsum color sit amet,</p>
                  <p>consectetur adipiscing elit.</p>
            </div>
         
          </div>
        </div>
      </div>
      {/* lorem code end  */}

         {/* Carousels code start */}
         <div className=" course_back_color">
        <div className="section-heading text-center course_top">Courses Offered</div>

        <div className="d-flex course_wid">
          <Slider {...settings}>
            <div className="course_wrapper card_wid">
            <MDBCardGroup className=''>
      <MDBCard>
        <MDBCardImage className='course_img' src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
        <MDBCardBody>
          <span className='word_font'> <b>Advanced Diploma </b></span>
          <p className='word_font'> <b>in Business </b></p>
          <MDBCardText className='word_spacing'>
           Lorem ipsum dolor  sit amet. consectetur adipiscing elit,
          </MDBCardText>
          <MDBCardText>
            <small className=' learn_property'>Learn More >></small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
            </div>
            <div className="course_wrapper card_wid">
            <MDBCardGroup className=''>
      <MDBCard>
        <MDBCardImage className='course_img' src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
        <MDBCardBody>
          <span className='word_font'> <b>M2 Robotics </b></span>
       
          <MDBCardText className='word_spacing mt-5'>
           Lorem ipsum dolor  sit amet. consectetur adipiscing elit,
          </MDBCardText>
          <MDBCardText>
            <small className=' learn_property'>Learn More >></small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
            </div>
            <div className="course_wrapper card_wid">
            <MDBCardGroup className=''>
      <MDBCard>
        <MDBCardImage className='course_img' src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
        <MDBCardBody>
          <span className='word_font'> <b>Al Robotics </b></span>
      
          <MDBCardText className='word_spacing mt-5'>
           Lorem ipsum dolor  sit amet. consectetur adipiscing elit,
          </MDBCardText>
          <MDBCardText>
            <small className=' learn_property'>Learn More >></small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
            </div>
            <div className="course_wrapper card_wid">
            <MDBCardGroup className=''>
      <MDBCard>
        <MDBCardImage className='course_img' src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
        <MDBCardBody>
          <span className='word_font'> <b>Robotics </b></span>
          <MDBCardText className='word_spacing mt-5'>
           Lorem ipsum dolor  sit amet. consectetur adipiscing elit,
          </MDBCardText>
          <MDBCardText>
            <small className=' learn_property'>Learn More >></small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
            </div>
       
          </Slider>
        </div>
      </div>
{/* Carousels code start */}

 <Testimonials  name={'Speaks'}/>
    </div>
  )
}

export default Univarsity
