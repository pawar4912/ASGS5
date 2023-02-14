
import './about.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import React from "react";
import pic6 from '../asset/logo/Glo_cer_blue.png'

function About() {

    return (

        <div>
          {/* About Section */}
          <div className="container mt-5">
            <h3 className="section-heading">Our Programs</h3>
            <div className="row postz1">
              <div className="col  cardaw1 bords1" id="firstdiv1">  
                <div className="w3-card-4">
                  <div className="w3-container  bords1">
                    <div className="text-center mt-4">
                    <img id="abt1img" src={require('../asset/inter_bachler.png')} alt="Avatar" height={60} />
                    </div>
                    <br></br>
                    <p className="text-center intera">International Bachelors</p>
                    <p className="text-center underd">Undergradutes Program With <br />
                      worlds top 2% institutions</p>
                  </div>
                </div>
              </div>
              <div className="col  cardaw2" id="im2">
                <div className="w3-container">
                  <div className="text-center mt-4"> 
                    {/* <img  src={pic3}  alt="Avatar" /> */}
                    <img id="abt2img" src={require('../asset/logo/oni_program_blue.png')} height={60} alt="Avatar" />
                  </div>
                  <p className="text-center mt-4 intera">International Masters</p>
                  <p className="text-center underd">Masters Program With <br />
                  worlds top 3% institutions</p>
                </div>
              </div>
              <div className="col  cardaw3 bords2" id="im3" >
                <div className="w3-container">
                  <div className="text-center mt-4"> 
                    <img id="abt3img" src={pic6} alt="Avatar" height={60} />
                  </div>
                  <p className="text-center mt-2 intera">International Short Courses</p>
                  <p className="text-center underd">Mini Courses and specialised <br />
                    programs from world's <br />
                    leading institutions</p>
                </div>
              </div>
            </div>
          </div>
          {/* Select your study destination */}
          <div className="backa1 bgco" >
            <div >
              <h3 className="pt-3 text-white mt-5 matd1">Select Your Study Destination</h3>
              <span className="pb-4 text-white matd1">To View Program</span>
              <div>
              <div className="d-flex  mt-5 mb-5 text-center  gapflex backlogo  ">
                


                <div className="col-lg-2">
                

                <div className="card-body img1m">
                <img src={require("../asset/Flag_of_Australia_(converted) 2.png")} alt="" className="img_imM " />
                  <p className="mt-4 text-center cityn">Australia</p>
                </div>
              </div> 

              



                <div className="col-lg-2">
                

                  <div className="card-body img1m">
                    <img  src={require("../asset/../asset/Flag_of_Germany 2.png")} alt="" className="img_imM" />
                    <p className="mt-4 text-center cityn">United Kingdom</p>
                  </div>
                </div> 
                  <div className="col-lg-2">
                  <div className="card-body img1m">
                    <img  src={require("../asset/440px-Flag_of_the_United_States 2.png")} alt="" className="img_imM" />
                    <p className="mt-4 text-center cityn">New Zealand</p>
                  </div>
                </div> 
                  <div className="col-lg-2">
                  <div className="card-body img1m">
                    <img  src={require("../asset/440px-Flag_of_the_United_States 2 (1).png")} alt="" className="img_imM" />
                    <p className="mt-4 text-center cityn">United States</p>
                  </div>
                </div>  
                <div className="col-lg-2">
                  <div className="card-body img1m">
                    <img  src={require("../asset/Flag_of_Canada_(Pantone) 2.png")} alt="" className="img_imM" />
                    <p className="mt-4 text-center cityn">Canada</p>
                  </div>
                </div>    
              </div>
              </div>
            </div>
            <div className='d-flex'>
              
              <h4 className="text-white matd1 mb-5">Browse By Course Streams</h4>
              &nbsp;&nbsp;
              {/* <img src={require("../asset/Vector (1).png")}/> */}
              <PlayCircleOutlineIcon className="arricon"/>
             
            </div>
          </div>
        </div>
      );
    }

  export default About;