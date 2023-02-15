import Background from '../../asset/ASGS final logo-01 2.png';
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Info() {

  
    return (

      <div>
         <hr className='hr'></hr>
<Container style={{maxWidth:"none",margin:"70px"}} >
 
  <Row>
    <Col><h1 className='ourhead'>About The Program</h1></Col>
  </Row>
  <Row>
    <Col sm={4} style={{alignItems:"start",justifyContent:"start",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia>
        <img src={require("../../asset/cardimg1.png")} alt="" className="img_imM12" />
          </CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Col>
    <Col sm={4}  style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
        <img src={require("../../asset/cardimg2.png")} alt="" className="img_imM12" />
          </CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Col>
    <Col sm={4} style={{alignItems:"end",justifyContent:"end",display:"flex"}}>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia>
        <img src={require("../../asset/cardimg3.png")} alt="" className="img_imM12" />
          </CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography>
            <p  className='cardtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </Col>
  </Row>
  </Container>
  <hr className='hr'></hr>
  <Container style={{maxWidth:"none",margin:"70px"}}>
    <Row>
    <Col><h1 className='ourhead'>Program Overview</h1></Col>
  </Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>
<Row>
  <Col sm={6}>
<div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
  <Col sm={6}>
  <div className='progimg'>
  <div><img src={require("../../asset/Maskgroup.png")} alt=""  /></div>
  <div><p className='progtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p></div>
</div>
  </Col>
</Row>

  </Container>
  <Container style={{maxWidth:"none"}}>
    <Row>
      <Col>
      <div style={{backgroundColor:"rgba(28, 40, 90, 0.8)"}}>
        <div className='ourbutt'>
          <div>
        <div>
          <h3 className='ourhead1'>Syllabus for the Course</h3>
        </div>
        <div>
          <p className='ourtext'>Refer to the course curricullam and the things you will learn in this full module</p>
        </div>
        </div>
      
      <div>
      <Button className='ourbutton btn-rounded btnapply'> <NavLink className='text-white' to='/apply'> Download Syllabus </NavLink></Button>
      </div>
      </div>
      </div>
      </Col>
    </Row>
  </Container>
     </div>
      );
    }

  export default Info;