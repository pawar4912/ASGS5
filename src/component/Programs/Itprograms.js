import { Container, Row, Col } from 'react-grid';
import Box from '@mui/material/Box';
import Header from '../comman/Header';
import Footer from '../comman/Footer';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function Itprograms() {


    return (

        <div>
            <Header/>
            <Container>
                <h3 className='heading-text heading-gap'>Information Technology</h3>
                <Row>
                    <Col>
                   
                        <Box  component="form" noValidate autoComplete="off" className='testicard' >
                          
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Cyber Security</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                 
                                    <p>Choose your University</p>
                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='/about' className='unitext'>Victoria University,Sydney</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='/about' className='unitext'>Victoria University,Melbourne</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='/about' className='unitext'>Victoria University,Brisbane</NavLink>   </Button>
                                        </div>

                                    </div>

            
                                </div>
                            </div>
                           
                        </Box>
                       
                    </Col>
                    
                </Row>
                <Row>
                <Col>
              
                            <Box  component="form" noValidate autoComplete="off" className='testicard' >

                           
                            <div className='testimain'>
                                <div className="imgsidediv">

                                </div>
                                <div>
                                    <h2>Information Technology</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                 
                                    <p>Choose your University</p>

                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Sydney</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Melbourne</NavLink>   </Button>
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
                                    <h2>Data Science</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                 
                                    <p>Choose your University</p>

                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Melbourne</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Swinburne University </NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Melbourne</NavLink>   </Button>
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
                                    <h2>Bachelor Of Business (Major In Information System Management)</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac mattis odio lacus id nibh</span>
                                 
                                    <p>Choose your University</p>

                                    <div className='rowbuttons'>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Sydney</NavLink>   </Button>
                                        </div>
                                        <div className=''>
                                        <Button className='bordsa4 '> <NavLink to='#' className='unitext'>Victoria University,Brisbane</NavLink>   </Button>
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

export default Itprograms;