import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

function EcaEmployee() {
  return (
    <>
    <Container className='property_box' >
    <div className='Campus_height'>
     <Row>
       <Col lg={10}><h1 className='ourhead'>ECA Employability Advantage</h1></Col>
     </Row>
     </div>
   
     </Container>
      <Container className='property_box' >
      <div className='Campus_height'>
       <Row>
         <Col lg={10}><h1 className='ourhead'>FAQ'S</h1></Col>
       </Row>
       </div>
     
       </Container>
       </>
  )
}

export default EcaEmployee
