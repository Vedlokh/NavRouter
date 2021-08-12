import React from 'react';
import DishName from './DishName';

var Card=(props)=>{
    return(<div className="card">
    <div className="Card">
        <div className="Cards">
            <img src={props.imagesrc} alt="Food pic"/>
            <h3 className="Dishntype">{props.title}</h3>
            <h4 className="Dishname">{props.sname}</h4>
            <a href={props.link} target="_blank">
                <button >Add to Cart</button>
            </a>
        </div>
    </div></div>);
    {DishName.map(()=>{}
        )}
}
export default Card;