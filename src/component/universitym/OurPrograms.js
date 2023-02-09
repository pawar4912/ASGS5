





import Header from "../comman/Header";
import Carousels1 from "../about/Carousels1";
import Info from "../about/Info";
import Letsmeet from "./letsmeet";
import  Placed from "./placed"
import Footer from "../comman/Footer";
import Testimonials from "../comman/Testimonials";

function OurPrograms() {
   
    return (
      
      <div>
        <Header></Header>
       <Carousels1></Carousels1>
       <Info></Info>
       
    
       <Letsmeet/>
      <Testimonials></Testimonials>
    <Placed></Placed>
     <Footer></Footer>
 
      </div>
      
    );
  }
  
  export default OurPrograms;