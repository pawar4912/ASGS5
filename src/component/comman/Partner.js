import React from 'react'
import Footer from './Footer'
import Header from './Header'

import '../../asset/Scss/Style.scss'

 function Partner() {
  return (
    <div>
        <Header/>
        <div className='unimain'>
        <h2 className="text-center mt-5 "> <b> Partners</b></h2>
        <div className="row">     
          <div className="col-lg-12 p-4">
            <div className="form-outline ">
              <input type="search" id="form1" className="form-control newsearch" placeholder="Search For unversity" aria-label="Search" />
            </div>
          </div>
        </div>
        <div className="row p-4 ">
          <div className="col-lg-3 unv1 pb-5 px-3 " >
            <p className="text-center p-3">Filter</p>
            <hr />
            {/* <span>Select Country</span> */}
            <div className>Select Country</div>
            <select className="form-control vodiapicker">
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
          <div className="col-lg-1  ">
          </div>
          <div className="col-lg-8">
            <div className="row">
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
            </div>
            {/* 2nd */}
            <div className="row my-3">
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
            </div>
            {/* 3rd */}
            <div className="row my-3">
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
            </div>
          </div>
        </div>  
      </div>





        <Footer/>
      
    </div>
  )
}
export default Partner