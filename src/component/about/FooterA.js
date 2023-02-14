import "./footerA.scss";

function FooterA() {
  return (
    <div className="footerad1" id="foot1">
      <footer className="site-footer1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <h6>ABOUT ASGS</h6>
              <p className="text-justify1">
                Education Centre of Australia (ECA) was established in 2006 and
                is at the forefront of Australia’s higher education sector. We
                are renowned internationally for the quality of our teaching,
                academic expertise and research integrity.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>important links</h6>
              <ul className="footer-links1">
                <li>
                  <a href="#">Programs</a>
                </li>
                <li>
                  <a href="#">Apply Now</a>
                </li>
                <li>
                  <a href="#">terms & conditions</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links1">
                <li>
                  <a href="#">Admissions</a>
                </li>
                <li>
                  <a href="#">student life</a>
                </li>
                <li>
                  <a href="#">Placements</a>
                </li>

                <li>
                  <a href="#">academic partners</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Social Media</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <img
                src={require("../../asset/Mask group1.png")}
                height={53}
                width={114}
              ></img>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons1">
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
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
      <div className="d-flex justify-content-center flast11">
        <span className="flast">
          Copyright © 2022. All rights reserved by Education Centre of
          Australia.
        </span>
      </div>
    </div>
  );
}

export default FooterA;
