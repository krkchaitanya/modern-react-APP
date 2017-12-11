import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
  {id:'sdvdsv2',name:"jai",age:23},
  {id:'ascaj3',name:"jack",age:21},
  {id:'askjc2',name:"john",age:"25"}
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

nameChangeHandler=(event, id)=>{
const personIndex=this.state.persons.findIndex((p)=>{
  return p.id===id;
}) 
  const person={
    ...this.state.persons[personIndex]
  }

  person.name=event.target.value;

const persons=[...this.state.persons];
persons[personIndex]=person;


 this.setState({
  persons:persons
 });
}

togglePersonsHandler=()=>{
//  this.setState({
//    personsShow:true
//  })
const doesShow=this.state.personsShow;
this.setState({personsShow: !doesShow});
};

deletePersonHandler=(personindex)=>{
  console.log(personindex);
// const persons=this.state.persons.slice();
// es6 spread operator
const persons=[...this.state.persons];
persons.splice(personindex,1);
this.setState({
  persons:persons
})
}

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
      <div className="personList">
        {this.state.persons.map((person,index)=>{
          return <Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age}
           key={person.id}
           changed={(event)=>this.nameChangeHandler(event,person.id)}
           >
          </Person>
        })
        }
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
