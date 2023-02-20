import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
  return (
    <>
      <hr className="hr divide-line" />
      <div className="row mb-5 team-section">
        <div className="bordss">
          <h3 className="section-heading"> Our Team</h3>
          <div className="abtteam">
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/359.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Rupesh Singh</span>
                <br></br>
                <span className="submainname1">
                  CEO, Education center of Australia{" "}
                </span>
              </div>
            </div>
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/Rectangle 360.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Rajesh Singh</span>
                <br></br>
                <span className="submainname1">CEO, ECA Global</span>
              </div>
            </div>
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/Rectangle 361.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Dr. Lawrence Pratchett</span>
                <br></br>
                <span className="submainname1">CEO, Australian School </span>
              </div>
            </div>
          </div>
          <div className="abtteam">
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/Rectangle 362.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Dr. Scott Dickson</span>
                <br></br>
                <span className="submainname1">
                  Chief Academic Officer, ECA
                </span>
              </div>
            </div>

            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/Prof Bhawna Kumar.jpg")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Prof. Bhawna Kumar</span>
                <br></br>
                <span className="submainname1">Academic Director</span>
              </div>
            </div>

            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/Rectangle 368 (1).png")}
                  width={230}
                  height={279}
                  className="imgSlider1 imgd"
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Prof. Manoj Kumar</span>
                <br></br>
                <span className="submainname1">Director - CRC, ECA Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
