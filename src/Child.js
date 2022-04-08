import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


//Added event handler onClick inside of the <div>
function Child({ onChangeColor, color }) {    //initial function with "onChangeColor as a prop"
  //console.log(onChangeColor)
  function handleClick(){
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return(
   <div onClick={handleClick} className="child" style={{ backgroundColor: color }} /> 
  );
}

export default Child;
