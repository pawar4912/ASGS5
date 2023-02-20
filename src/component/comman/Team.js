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
                  src={require("../../asset/logo/team/Rupesh-Singh.png")}
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
                CEO & Director, ECA
                </span>
              </div>
            </div>
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/logo/team/Rajesh-Singh.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Rajesh Singh</span>
                <br></br>
                <span className="submainname1">CEO & Director - ECA Global</span>
              </div>
            </div>
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/logo/team/Lawerence.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Dr. Lawrence Pratchett</span>
                <br></br>
                <span className="submainname1">	CEO, ASGS</span>
              </div>
            </div>
          </div>
          <div className="abtteam">
            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/logo/team/Scott-Dickson.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Dr. Scott Dickson</span>
                <br></br>
                <span className="submainname1">	Chief Academic Officer, ECA</span>
              </div>
            </div>

            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/logo/team/Bhawna-Kumar.png")}
                  width={245}
                  height={279}
                  className="imgSlider1 "
                  alt="team-member-img"
                ></img>
              </div>
              <div className="infop1">
                <span className="mainname1">Prof. Bhawna Kumar</span>
                <br></br>
                <span className="submainname1">Academic Director, ASGS</span>
              </div>
            </div>

            <div>
              <div className="img_shad">
                <img
                  src={require("../../asset/logo/team/MANOJ-KUMAR.png")}
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
