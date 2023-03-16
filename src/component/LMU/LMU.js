import React from "react";

const LMU = () => {
  return (
    <>
      <div className="margin_top">
        <div className="col-lg-12 col-md-6 col-sm-12 mt-5 imp-section">
          <div className="col-lg-6 col-md-6 col-sm-12 imp-description">
            <div>
              <h3 className="section-heading">International Masters Program</h3>
              <div className="info-section">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="imggroup">
            <img
              src={require("../../asset/image 1.jpg")}
              alt="Rectangle3254548"
              className="bg-img"
            />
          </div>
        </div>
      </div>
      <div className="row knowmore margin_top">
        <h3 className="section-heading">
          ECA - London Metropolitan University
        </h3>
        <div className="col-lg-7 col-md-6 col-sm-12 ">
          <div className="info-section">
            <p>
              London Met Online is a collaboration between London Metropolitan
              University (London Met) and the Education Centre of Australia
              (ECA). Students who study online with London Met Online receive
              the same high-quality qualifications and courses as students
              studying on-campus at London Metropolitan University. Delivered by
              EOL, the online learning division of ECA, London Met Online
              programmes give you access to expert tutors, excellent learning
              resources and are designed to provide students with a world-class
              education.
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mt-5">
          <div className="imggroup">
            <img
              src={require("../../asset/logo/about/ECA_image.png")}
              alt="Rectangle3254548"
              width={300}
            />
          </div>
          <div className="imggroup">
            <img
              src={require("../../asset/logo/UniversityLogos/London-Metropolitian-University.jpg")}
              alt="Rectangle3254548"
              width={300}
            />
          </div>
        </div>
      </div>
      <div className="row knowmore margin_top">
        <h3 className="section-heading">
          About London Metropolitan University
        </h3>
        <div className="col-lg-5 col-md-6 col-sm-12 mt-5">
          <div className="imggroup">
            <img
              src={require("../../asset/img/universities/Charles-Sturt.jpg")}
              alt="Rectangle3254548"
              className="lmu-eca-img"
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 almu-info">
          <div className="info-section">
            <p>
              London Metropolitan University has a rich history with strong
              educational roots dating back to 1848.
            </p><p>
              The University as it is
              today was created in 2002 with the merging of London Guildhall
              University and the University of North London, the first merger
              between two universities in the UK. Its roots, however, lie firmly
              in the nineteenth century with the establishment of the
              Metropolitan Evening Classes for Young Men in 1848.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LMU;
