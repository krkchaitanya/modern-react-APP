import React, {Component} from "react";
import "./Person.css";

const person= (props)=>{
        return(
                <div className="Person">
                         <p>I'm -{props.name}- and i am-{props.age}</p>
                         <p>{props.children}</p>
                         <input type="text" onChange={props.changed}/>
                </div>

        ) 
}

export default person;