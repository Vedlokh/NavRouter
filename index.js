import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card"
import DishName from './DishName';
 

ReactDOM.render(
    <>
    {DishName.map((val)=>{
     return(
         <Card
        imagesrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
       
        link={val.link}
          />
     );  })}
    </>,
    document.getElementById("root")
);          