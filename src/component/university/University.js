import React from 'react';
import Footer from '../comman/Footer';
import Header from '../comman/Header'
import img2 from '../../asset/apply.png'
import './university.scss';



 function University() {




  return (
    <div>
   <Header/>
   <div className='pt-5'>
       <div className="unniname ">
      <p>PREMIUM PARTNERS</p>
      </div>
      </div>


      <div className="whydiv text-center pb-3 bordsa1">
        <div className="whypre">
        <h3 className='p-3'>WHY PREMIUM</h3>
           </div>
           <span >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sunt nulla voluptas corporis dolorum. Dolor consequuntur ab  </span><br></br>
           <span className=''>corrupti exercitationem accusantium, saepe, vero eius, aperiam officia amet iure recusandae. Mollitia?</span>
      <div>

      </div>
      </div>






   <div className="unimain">
   

        {/* <h2 className="text-center mt-5 "> <b>Premium Partnerss</b></h2> */}
      


        <div className="row p-4 mt-4 ">
      

          <div className="col-lg-3  " >
          <div className="form-outline mb-2">
              <input type="search" id="form1" className="form-control " placeholder="Search" aria-label="Search" />
            </div>
            <div className='unv1 pb-5 px-3'>
            <p className="text-center p-3">Filter</p>
            <hr />

       

            {/* <span>Select Country</span> */}
            <div className='mt-4'>Select Country</div>
            <select className="form-control vodiapicker ">
              <option  value="en" className="test" data-thumbnail="https://cdn.shopify.com/s/files/1/0491/2689/9880/files/aste.png?v=1611693503" selected>   United States</option>
              <option value="opt2">Australia</option>
              <option value="opt3">New Zealand </option>
              <option value="opt4">US </option>
              <option value="opt5">Canada </option>
            </select>
            <div className="mt-4">Select University </div>
            <select className="form-control">
              <option value="opt1">Harvard University</option>
              <option value="opt2">Stanford University</option>
              <option value="opt3">Some ABC University </option>
           
            </select>
            <div className="mt-4">Select Degree Course</div>
            <select className="form-control ">
              <option value="opt1">BSC </option>
              <option value="opt2"> BCA</option>
              <option value="opt3"> MSC</option>
            
            </select>
          </div>
          </div>
          <div className="col-lg-1  ">
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                  <img src={require("../../asset/img/Victoria_1.png")} alt="Avatar" className='imgad1' />
                  </div>
                  <div className="container">
                    <p className="text-center"><b>Victoria University</b></p> 
                    <p className="text-center">Sydney</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
              </div>
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                  <img src={require("../../asset/img/vu brisbane.png")} alt="Avatar" height={300}  className='imgad1'  />
                  </div>
                  <div className="container">
                    <p className="text-center"><b>Victoria University</b></p> 
                    <p className="text-center">Brisbane</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
              </div>
              {/* <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                  <img src={require("../../asset/university-education-logo-design-template-free-vector 1.png")} alt="Avatar"  className='imgad1'  />

                  </div>
                  <div className="container">
                    <p className="text-center"><b>Harvard University</b></p> 
                    <p className="text-center">50+ University</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* 2nd */}
            {/* <div className="row my-3">
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                    <img src={require("../../asset/download 1.png")} alt="Avatar" className='imgad1' />
                  </div>
                  <div className="container">
                    <p className="text-center"><b>Harvard University</b></p> 
                    <p className="text-center">50+ University</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
              </div>
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                  <img src={require("../../asset/Stanford_University_seal_2003 1 (1).png")} alt="Avatar"  className='imgad1'  />
                  </div>
                  <div className="container">
                    <p className="text-center"><b>Harvard University</b></p> 
                    <p className="text-center">50+ University</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
              </div>
              <div className="col-lg-3">
                <div className="card_as">
                  <div className="img1 my-4">
                  <img src={require("../../asset/university-education-logo-design-template-free-vector 1.png")} alt="Avatar"  className='imgad1'  />

                  </div>
                  <div className="container">
                    <p className="text-center"><b>Harvard University</b></p> 
                    <p className="text-center">50+ University</p> 
                    <div className="text-center mb-4">    
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
       
          </div>
        </div>  
      </div>
   <Footer/>
    </div>
  )
}
export default University;