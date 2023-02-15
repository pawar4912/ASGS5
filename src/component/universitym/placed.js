import { Container, Row, Col } from 'react-grid-system';

function Placed() {


    return (

        <div>
            
            <Container style={{ maxWidth: "none", margin: "70px" ,marginTop:"1rem",marginBottom:"1rem"}} >

                <Row>
                    <Col sm={12}>
                        <div className="wrap">
                            
                            <div className="description46">
                                <div>
                                <h1> <span className='textspan'> 2000+ </span><span> Students get placed every year</span> </h1>
                                </div>
                                
                                
                            </div>
                            <div className="title46">
                                <img src={require('../../asset/Group 1467.png')} className="imgper11"></img>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <hr className='hr'></hr>


        </div>
    );
}

export default Placed;