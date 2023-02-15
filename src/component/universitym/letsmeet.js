
// import './letsmeet.scss';
import '../../asset/Scss/Style.scss'
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';


function Letsmeet() {

  
    return (

      <div>
        
<Container style={{maxWidth:"none",margin:"8%",marginTop:"3rem",marginBottom:"4rem"}} >
        
  <Row>
    <Col><h1 className='ourhead23'>Let’s Meet Our Tutors</h1>
    <p className='ourtext10'>We have the top Qualfied tutors from all over the world</p></Col>
  </Row>
 <Row>
    <Col sm={3}>
       
 <Card style={{ width: '18rem' }}>
      <Card.Body className='cardbody'>
        <Card.Title><img  alt="" src={require('../../asset/Ellipse 34.png')}  /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Harshit Dania</Card.Subtitle>
        <Card.Text>
        Designation
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
 
    </Col>
    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='cardbody'>
        <Card.Title><img  alt="" src={require('../../asset/Ellipse 34.png')} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Harshit Dania</Card.Subtitle>
        <Card.Text>
        Designation
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </Col>
    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='cardbody'>
        <Card.Title><img  alt="" src={require('../../asset/Ellipse 34.png')} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Harshit Dania</Card.Subtitle>
        <Card.Text>
        Designation
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </Col>
    <Col sm={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='cardbody'>
        <Card.Title><img alt="" src={require('../../asset/Ellipse 34.png')}  /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Harshit Dania</Card.Subtitle>
        <Card.Text>
        Designation
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </Col>
 </Row>
  </Container>
  <hr className='hr'></hr> 
     </div>
      );
    }

  export default Letsmeet;