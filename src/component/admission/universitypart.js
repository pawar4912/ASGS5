import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Input } from 'react-grid-system';
import { BiPhoneCall } from "react-icons/fa";
import Img5 from '../images/img5.png';
import Button from '@mui/material/Button';

const Universitypart = () => {
    return (

        <>

            <Container  className='univer'style={{ maxWidth: 'none', }}>
                <Row className='univerpara'>
                    <Col >
                        <div className='="univerpara1' >
                        <div>
                            <img src={Img5} alt="fireSpot" />
                        </div>
                        <div>
                            <h1>Your application has been Submitted</h1>
                        </div>
                        <div>
                            <p>We will reach out to you in sometime with updates</p>
                        </div>
                        <div>
                 <Button variant="primary" style={{ color: "white", background: "#00BBD2", 
				 height: "41px", width: "203.37px",
                         border: "none",borderRadius:"39.1433px",marginBottom:"60px",marginTop:"50px" }}>Continue</Button>{' '} 
                </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Universitypart;
