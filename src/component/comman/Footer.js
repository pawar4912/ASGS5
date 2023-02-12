import "../comman/footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footerad mt-3">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <h6 className="quick">ABOUT ASGS</h6>
              <p className="text-justify ">
                Education Centre of Australia (ECA) was established in 2006 and
                is at the forefront of Australia’s higher education sector. We
                are renowned internationally for the quality of our teaching,
                academic expertise and research integrity....
                <NavLink className="footera" to="/KnowMore">
                  Know More
                </NavLink>
              </p>

              <br></br>
              <br></br>
            </div>

            <div className="col-xs-6 col-md-3"></div>

            <div className="col-xs-6 col-md-4">
              <div className="row">
                <div className="col-md-9">
                  <h6 className="quick">Quick links</h6>
                </div>
                <div className="d-flex ">
                  <div className="col-xs-6 col-md-6">
                    <ul className="footer-links">
                      <li>
                        <a href="#" className="hodse">
                          <NavLink className="footera" to="/about">
                            Our Programs
                          </NavLink>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="hodse">
                          {" "}
                          <NavLink className="footera" to="/Partner">
                            Academic Partners
                          </NavLink>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hodse">
                          <NavLink className="footera" to="/Placement">
                            Placements
                          </NavLink>
                        </a>
                      </li>

                      <li>
                        <a className="hodse">
                          {" "}
                          <NavLink className="footera" to="/Campus">
                            Campus Life
                          </NavLink>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xs-6 col-md-6 mx-5">
                    <ul className="footer-links">
                      <li>
                        <a className="hodse">
                          {" "}
                          <NavLink className="footera" to="/apply">
                            Apply Now
                          </NavLink>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hodse">
                          {" "}
                          <NavLink className="footera" to="/Contact">
                            Contact Us
                          </NavLink>
                        </a>
                      </li>
                      <li>
                        <a className="hodse">
                          {" "}
                          <NavLink className="footera" to="/Policy">
                            Privacy Policy
                          </NavLink>{" "}
                        </a>
                      </li>

                      <li>
                        <a className="hodse">
                          {" "}
                          <NavLink className="footera" to="/Terms">
                            Terms & condition
                          </NavLink>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-xs-6 col-md-3">
              <h6>Social Media</h6>
            
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6 col-xs-12 ">
              <img
                src={require("../../asset/logo/ASGS-white-logo.png")}
                height={60}
                width={175}
                alt="site-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook " />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a className="dribbble1" href="#">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
      <div className="d-flex justify-content-center flast1">
        <span className="text-justify">
          Copyright © 2023. All rights reserved by Education Centre of
          Australia.
        </span>
      </div>
    </div>
  );
}

export default Footer;
