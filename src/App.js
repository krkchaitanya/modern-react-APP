import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
state={
  persons:[
  {name:"jai",age:23},
  {name:"jack",age:21},
  {name:"john",age:"25"}
  ],
  personsShow:false
}

switchNameHandler=(newName)=>{
  this.setState({
    persons:[
      {name:"mitchelMArtin",age:23},
      {name:newName,age:24},
      {name:"john",age:28}
      ]
  })
}

nameChangeHandler=(event)=>{
 this.setState({
  persons:[
    {name:"mikel",age:23},
    {name:event.target.value,age:21},
    {name:"john",age:27}
    ]
 })
}

togglePersonsHandler=()=>{
//  this.setState({
//    personsShow:true
//  })
const doesShow=this.state.personsShow;
this.setState({personsShow: !doesShow});
};

  render() {

    const style={
      backgroungColor:'white',
      font:"inherit",
      border:"1px solid blue",
      padding:'8px',
      cursor:'pointer'
    };
let Persons=null;
    if(this.state.personsShow){
      Persons=(
      <div><br/><br/>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler} ></Person>
       </div>
      )
    }

    return (
      <div className="App">
        <h3>React Component</h3>
        <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Toggle persons</button>

        {/* <button onClick={this.switchNameHandler.bind(this,"max!")}>SwitchName</button> */}
       {Persons}
      </div>
    );
  }
}

export default App;
