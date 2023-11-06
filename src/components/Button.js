import React from "react";
import ReactDOM  from "react-dom";
import '../index.css';


// recallable button
const Button =({name,click})=>{
 return <a>
<button className="button" onClick={click}>{name}</button>
 </a>
}
export default Button;