
import Slider from "react-slick";
import  './Team.scss' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team(){

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     autoplay: true,
  //     speed: 5000,
  //     autoplaySpeed: 5000,
  //     cssEase: "linear",
  // };


    return(

        

<div className='bordss mt-5 '>
    <div className="text-bold  sbf">
      <h3 className="sbf mb-5"><b> Our Team </b></h3>
    </div>

    <div className="abtteam mt-4">


<div className="image-item1">
  <div className="img_shad p-3">
  <img src={require('../../asset/359.png')} width={245} height={279} className="imgSlider1 " >
  </img>


  <div className='infop1'>
      <span className='mainname1'>Rupesh Singh</span><br></br>
      <span className='submainname1'>CEO, Education center of Australia </span>
  </div>
  </div>
</div>
<div className="image-item1">
<div className="img_shad p-3">
  <img src={require('../../asset/Rectangle 360.png')} width={245} height={279} className="imgSlider1 "></img>
  <div className='infop1'>
      <span className='mainname1'>Rajesh Singh</span><br></br>
      <span className='submainname1'>CEO, ECA Global
</span>
  </div>
  </div>
</div>
<div className="image-item1">
<div className="img_shad p-3">
  <img src={require('../../asset/Rectangle 361.png')} width={245} height={279} className="imgSlider1 "></img>
  <div className='infop1'>
      <span className='mainname1'>Dr. Lawrence Pratchett</span><br></br>
      <span className='submainname1'>CEO, Australian School </span>
  </div>

</div>
</div>




</div>
<br></br>
<div className="abtteam  mt-5 mb-2 mdas ">



<div className="image-item1">
<div className="img_shad p-3">
  <img src={require('../../asset/Rectangle 362.png')} width={245} height={279} className="imgSlider1 "></img>
  <div className='infop1'>
      <span className='mainname1'>Dr. Scott Dickson</span><br></br>
      <span className='submainname1'>Chief Academic Officer, ECA
</span>
  </div>
  </div>
</div>

<div className="image-item1 ">
<div className="img_shad p-3">
  <img src={require('../../asset/Rectangle 368 (1).png')} width={230} height={279} className="imgSlider1 imgd"></img>
  <div className='infop1'>
      <span className='mainname1'>Prof. Manoj Kumar</span><br></br>
      <span className='submainname1'>Director - CRC, ECA Global
</span>
  </div>
  </div>
</div>

</div>

</div>

    );

} 

export default Team;