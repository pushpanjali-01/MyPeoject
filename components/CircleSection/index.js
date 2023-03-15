import React from "react";
import "./index.css"
const CircleSection = ({height,width,backgroundColor,borderRadius,img,margin_left}) => {
    console.log(width)
  return (
    <div className="circle"
    style={{width: `${width}`,height: `${height}`, backgroundColor: `${backgroundColor}`, borderRadius: `${borderRadius}`}}>
        <img src={img} className="logo_img"
        style={{marginLeft: `${margin_left}`}}/>     
    </div>
  )
}
export default CircleSection;