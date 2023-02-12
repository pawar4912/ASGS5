
import React, {useState} from 'react';
import {FaArrowUp} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button className='scroll-up-btn'>
     <FaArrowUp onClick={scrollToTop} />
    </Button>
  );
}
  
export default ScrollButton;