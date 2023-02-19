import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <>
      <Container className="backimg" style={{ maxWidth: "none" }}>
        {/* <Container style={{ backgroundImage: `url(${Img3})`, maxWidth: 'none',height:'500px' }}> */}
        <Row className="blockimg">
          <Col sm={6}>
            <div className="indexpara">
              <div>
                <h2>Welcome to</h2>
              </div>
              <div>
                <h1>Admission 2022</h1>
              </div>
              <div>
                <p>
                  Build your career by enrolling into an advance graduation or
                  post graduation program and study offshore.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="gredcon" style={{ maxWidth: "none" }}>
        <Row>
          <Col sm={6}>
            <div className="indexpara2">
              <div>
                <p>
                  Please FIll in your details to know about admission process
                </p>
              </div>
              <div>
                <div>
                  <img
                    src={require("../../asset/mobile-app-development.jpg")}
                    alt="fireSpot"
                    style={{ width: "-webkit-fill-available" }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={2}></Col>
              <Col sm={8}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  className="formg"
                >
                  <div className="formgroup">
                    <div>
                      <h1>Add your Details</h1>
                    </div>
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter Your Name"

                        // defaultValue="Name"
                      />
                    </div>
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter Mail ID"
                      />
                    </div>
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter Mobile Number"
                        type=""
                      />
                    </div>

                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter Your Degree"
                      />
                    </div>

                    <div className="buttonform">
                      <Button
                        variant="primary"
                        style={{
                          color: "white",
                          background: "#00BBD2",
                          height: "41px",
                          width: "203.37px",
                          border: "none",
                          borderRadius: "39.1433px",
                          marginBottom: "50px",
                        }}
                      >
                        <Link to="/universitypart">Submit</Link>
                      </Button>{" "}
                    </div>
                  </div>
                </Box>
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Apply;
