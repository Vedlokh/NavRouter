import React from 'react'
import "./index.css";
import Sdata from "./Sdata";
function Card(props)
{ return(
  <>
 
  <div className="cards"><div className="card">
    <img src={props.imgsrc} alt="mypic" />
    <div className="card_info">
      {console.log(props)}
      {/* <span className="card_category"> {props.title}</span> */}
          <h3 className="card_title">{props.sname} </h3>
          <h3 className="card_title">{props.sname} </h3>
          <a href={props.link} target="_blank">
          <button>watch Now</button>
          </a>
         
    </div>
    
    
    
    
    </div></div>
  
  
  
  </>)
}
export default Card;