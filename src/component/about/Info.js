import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

function 
Info() {

  
    return (

      <div>
         <Container className="backimg" style={{ maxWidth: "none" }}>
        {/* <Container style={{ backgroundImage: `url(${Img3})`, maxWidth: 'none',height:'500px' }}> */}
        <Row className="">
          <Col sm={12}>
            <div className="text_height">
              <div>
                <h1> <b>Cyber Security from,Sydney Campus </b></h1>
              </div>
              <div>
                <h1>Victoria University</h1>
              </div>
              <div>
                <p>
                  Build your career by enrolling into an advance
                   </p>
                <p>
                 graduation or post graduation program and study offshore.
                </p>
              </div>
              <div className='mt-3'>
                <span className='intake_padding'>
                Next Intake:
                   </span>
                   <div className='col-lg-2 back_color' >
                <h6>
                Start-Last Date
                </h6>
                <h5>
               15th July - 25th july
                </h5>
                </div>
              </div>
              <div className='mt-3'>
               
                   <div className='col-lg-2 back_color p-3'>
                   <h5>
               Download Brochure
                </h5>
                </div>
              </div>
            </div>
          </Col>
         
        </Row>
      </Container>
    
 <div className="row property_box">
     <div className='card card_border' >
      <div className="d-flex mt-4 course_direction">
        <div className="col-lg-4  course-padding">
          <div className=" mt-3">
          <h5>Course Name:</h5>
          <h4>Cyber Security</h4>
          </div>
          <div className=" mt-3">
          <h5>Eligibility:</h5>
          <h4>10 + 2</h4>
          </div>
        </div>
        <div className="col-lg-4 mb-5 px-5 text_middle">
          <div className=" mt-3">
          <h5>Intake Date:</h5>
          <h4>15th July</h4>
          </div>
          <div className=" mt-3">
          <h5>Fees:</h5>
          <h4>INR</h4>
          </div>
        </div>
        <div className="col-lg-4 mb-5 text_middle">
          <div className=" mt-3">
          <h5>Duration:</h5>
          <h4>1+2 Years</h4>
          </div>
          <div className=" mt-3">
          <h5>Campus:</h5>
          <h5>1st Year-Ahmedabad,India</h5>
          <h5>2nd + 3rd Year-Sydney,Australia</h5>
          </div>
        </div>
        </div>
      </div>
    </div>




<Container className='property_box'>
 
  <Row>
    <Col lg={10}><h1 className='ourhead'>About The Program</h1></Col>
    <Col lg={2}> <div class="howButton1 btnapply  ">Apply Now</div></Col>
  </Row>
  <Row>
    <Col sm={4} style={{alignItems:"start",justifyContent:"start",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia>
        <img  alt="" src={require('../../asset/Rectangle 32652.png')} className="img_imM12" />

          </CardMedia>
        <CardContent>
          <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    <Col sm={4}  style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
        <img alt=""  src={require('../../asset/Rectangle 32653.png')} className="img_imM12" />
          </CardMedia>
        <CardContent>
          <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
    <Col sm={4} style={{alignItems:"end",justifyContent:"end",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia>
        <img  alt=""  src={require('../../asset/Rectangle 32654.png')} className="img_imM12" />
          </CardMedia>
        <CardContent>
         <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
       </Card>
    </Col>
  </Row>
  </Container>
  <hr className='hr'></hr>
  <Container className='property_box'>
    <Row>
    <Col><h1 className='ourhead'>Highlights and Benefits</h1></Col>
  </Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img alt="" src={require('../../asset/Maskgroup1.png')}  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img  alt="" src={require('../../asset/Maskgroup1.png')}   /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img alt="" src={require('../../asset/Maskgroup1.png')}  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img  alt="" src={require('../../asset/Maskgroup1.png')}  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img alt=""  src={require('../../asset/Maskgroup1.png')} /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img  alt="" src={require('../../asset/Maskgroup1.png')}  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>

  </Container>
  <Container style={{maxWidth:"none"}}>
    <Row>
      <Col lg={12}>
      <div className='p-5 accordion_center' style={{backgroundColor:"#1C285A"}}>
     
            <Accordion className=' '>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='mx-5'> <h3>Course Modules </h3></Accordion.Header>
        <Accordion.Body className='mx-5'>
        Refer to the course curricullam and the things you will learn in this full module
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>

      </div>
      </Col>
    </Row>
  </Container>
  <Container className='property_box' >
 <div className='Campus_height'>
  <Row>
    <Col lg={10}><h1 className='ourhead'>Campus Life</h1></Col>
    <Col lg={2}> <div class="howButton1 btnapply">Apply Now</div></Col>
  </Row>
  </div>

  </Container>

  <Container className='property_box' >
  <Row>
    <Col lg={10}><h1 className='ourhead'>Cost Of Living</h1></Col>
  </Row>
 </Container>
 <hr className='hr'></hr> 
     </div>
      );
    }

  export default Info;