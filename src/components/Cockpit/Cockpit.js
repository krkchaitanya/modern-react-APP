import React from "react";
import classes from "./Cockpit.css";

const cockpit=(props)=>{
const assignedClasses=[];
    
// let btnClass="";

if(props.showPersons){
    // btnClass=classes.red;
}

if(props.persons.length<=2){
    assignedClasses.push(  classes.red);
}

return(
    <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
    </div>    
);

}

export default cockpit;