import { Container, Row, Col } from "react-grid";
import Box from "@mui/material/Box";
import Header from "../comman/Header";
import Footer from "../comman/Footer";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Itprograms() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h3 className="heading-text heading-gap">Information Technology</h3>
      <div id="information-technology">
      <div className="row">
        <div className="column">
          <div className="card-wrapper">
            <div className="card-content">
              <h3>Cyber Security</h3>
              <p className="card-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                finibus erat, ac mattis odio lacus id nibh
              </p>
              <div className="university-info">
                <h4>Victoria University: </h4>
                <div className="campus-wrapper warew">
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Sydney
                  </Button>
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Melbourne
                  </Button>
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Brisbane
                  </Button>
                </div>
              </div>
            </div>
            <div className="course-img">
              <img src={require("../../asset/CS1.jpg")} alt="First slide" />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card-wrapper">
            <div className="card-content">
              <h3>Cyber Security</h3>
              <p className="card-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquam, ex eget bibendum molestie, lectus metus
                finibus erat, ac mattis odio lacus id nibh
              </p>
              <div className="university-info">
                <h4>Victoria University: </h4>
                <div className="campus-wrapper  warew">
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Sydney
                  </Button>
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Melbourne
                  </Button>
                  <Button
                    className="buttonBg btn-rounded btnapply btfn"
                    onClick={() => navigate("apply")}
                  >
                    Brisbane
                  </Button>
                </div>
              </div>
            </div>
            <div className="course-img">
              <img src={require("../../asset/CS1.jpg")} alt="First slide" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Itprograms;
