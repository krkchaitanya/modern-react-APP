import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
state={
  persons:[
  {name:"jai",age:23},
  {name:"jack",age:21},
  {name:"john",age:"25"}
  ]
}

switchNameHandler=(newName)=>{
  console.log("clicked");
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

  render() {
    return (
      <div className="App">
        <h3>I'm in react Component</h3>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this,"max!")}>ClickHere</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobies: Racing </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}    changed={this.nameChangeHandler}></Person>
        <Person name={this.state.persons[2].name} ></Person>
      </div>
    );
  }
}

export default App;
