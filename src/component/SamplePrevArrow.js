import React from 'react'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "silver",borderRadius:"5px",color: "white" }}
        onClick={onClick}
      />
    );
  }
export default SamplePrevArrow
