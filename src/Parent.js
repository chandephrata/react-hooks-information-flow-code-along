import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {   // initial function
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);  //initial value for color state
  const [childrenColor, setChildrenColor] = useState('#FFF')

function handleChangeColor(newChildColor){     // created a new function to update state, and added newChildColor as an argument
  const newRandomColor = getRandomColor();
  setColor(newRandomColor)      //update color state to a new value
  setChildrenColor(newChildColor)
}
  // On both <Child/> we are going to pass this state chaning function as a prop to both child component
  //both <Child/> were updated/added under the initail <div/>
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>    
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
