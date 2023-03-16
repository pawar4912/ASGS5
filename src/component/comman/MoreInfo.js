import About_ECA from "../AboutASGS/About_ECA";
import ECA_Collage from "../AboutASGS/ECA_Collage";
import ECA_Message from "../AboutASGS/ECA_Message";
import ECA_Asgs from "../AboutASGS/ECA_Asgs";
import ECA_Tab from "../AboutASGS/ECA_Tab";
import ECA_Partner from "../AboutASGS/ECA_Partner";
import ECA_Leadership from "../AboutASGS/ECA_Leadership";
import ECA_Faculty from "../AboutASGS/ECA_Faculty";
import Button from "react-bootstrap/Button";

function MoreInfo() {
  return (
    <div className="w-100">
      <div className="it-programs">
        <img
          className="heading-banner"
          src={require("../../asset/logo/programs/IT.jpg")}
          alt="IT"
        />
        <div className="heading-info">
          <h3 className="heading-text">International </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            aliquam, ex eget bibendum molestie, lectus metus finibus erat, ac
            mattis odio lacus id nibh.
          </p>
        </div>
      </div>
      <About_ECA />
      <ECA_Collage />
      <ECA_Message />
      <ECA_Asgs />
      <ECA_Tab />
      <ECA_Partner />
      <ECA_Leadership />
      <ECA_Faculty />
      <div className="enquiry-section">
        <div className="enquiry-wrapper">
          <div className="enquiry-text">
            Get in touch with us inquire about our Courses and Products.
          </div>
          <Button className="buttonBg btn-rounded btnapply enquire-btn">Enquire Now</Button>
        </div>
      </div>
    </div>
  );
}
export default MoreInfo;
