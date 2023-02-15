
import '../../asset/Scss/Style.scss'
import { Container, Row, Col } from 'react-grid';

import Box from '@mui/material/Box';
import Header from '../comman/Header';
import Footer from '../comman/Footer';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function Bussiness() {


    return (

        <div>
            <Header></Header>
            <br></br>
            <Container>
                <div className='text-center busy heading-gap1'>
                    <h2><b> Business Programs </b> </h2>
                </div>
                <Row>
                    <Col>
                   
                        <Box
                            component="form"
                            // sx={{
                            //     '& .MuiTextField-root': { m: 1, width: '40ch' },
                            // }}
                            noValidate
                            autoComplete="off"
                            className='testicard'
                        >
                            
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Bachelor Of Business (Management)</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                    <h6>Know More</h6>


                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Melbourne</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Swinburne University Of Technology</NavLink>   </Button>
                                        </div>
                                       
                                        </div>
                                </div>
                            </div>
                           
                        </Box>
                       
                    </Col>
                    
                </Row>
                <Row>
                <Col>
                        <Box
                            component="form"
                            // sx={{
                            //     '& .MuiTextField-root': { m: 1, width: '40ch' },
                            // }}
                            noValidate
                            autoComplete="off"
                            className='testicard'
                        >
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Bachelor Of Business (Administration)</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                    <h6>Know More</h6>

                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'> University Of Canberra</NavLink>   </Button>
                                        </div>
                                     
                                       
                                        </div>
                                </div>
                            </div>
                        </Box>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Box
                            component="form"
                            // sx={{
                            //     '& .MuiTextField-root': { m: 1, width: '40ch' },
                            // }}
                            noValidate
                            autoComplete="off"
                            className='testicard'
                        >
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Bachelor Of Business (Marketing)</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                    <h6>Know More</h6>

                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>University Of Canberra</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Swinburne University Of Technology</NavLink>   </Button>
                                        </div>
                                       
                                        </div>

                                </div>
                            </div>
                        </Box>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Box
                            component="form"
                            // sx={{
                            //     '& .MuiTextField-root': { m: 1, width: '40ch' },
                            // }}
                            noValidate
                            autoComplete="off"
                            className='testicard'
                        >
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Bachelor Of Business</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                    <h6>Know More</h6>
                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>University Of Tasmania</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Charles Sturt University</NavLink>   </Button>
                                        </div>
                                       
                                        </div>


                                </div>
                            </div>
                        </Box>
                    </Col>
              </Row>
                    
                    
               
            </Container>
            <Footer/>
        </div>
    );
}

export default Bussiness;