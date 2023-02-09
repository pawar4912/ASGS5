import "./testimonalsA.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function TestimonialsA(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
   
    return(
     
        <div>

<div className="testloc1">
<span className="headingstyle1">Students Speaks</span>


<div className="d-flex flexdis1" >
    
        <div className="wrapper1">
          <div className="title1">
          <img src={require('../../asset/istockphoto-1139495117-612x612 1.png')} className="imgper11"></img>
          </div>
          <div className="description1">
            <p>Learning at Parul University has provided 
me with the much needed learning 
experience which has not only shaped my 
knowledge, but it has also provided me 
with the most enriching global experience</p>
<br></br>
<span className="nametest1">
    Diksha Patel
</span>
          </div>
        </div>


        <div className="wrapper">
          <div className="title1">
          <img src={require('../../asset/istockphoto-1139495117-612x612 1.png')} className="imgper11"></img>
          </div>
          <div className="description1">
            <p>Learning at Parul University has provided 
me with the much needed learning 
experience which has not only shaped my 
knowledge, but it has also provided me 
with the most enriching global experience</p>
<br></br>
<span className="nametest1">
    Diksha Patel
</span>
          </div>
        </div>

</div>
        
       
  

       </div>
       </div>
    )
}

export default TestimonialsA;