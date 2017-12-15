import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit.js";


class App extends Component {

constructor(props){
  super(props);
  console.log('[App.js] inside constructor:',props);

  this.state={
    persons:[
    {id:'sdvdsv2',name:"jai",age:23},
    {id:'ascaj3',name:"jack",age:21},
    {id:'askjc2',name:"john",age:"25"}
    ],
    otherState:'some other value',
    showPerson:false
  }
}


componentWillMount(){
  console.log('[App.js] inside componentWillMount()');
}

componentDidMount(){
  console.log('[App.js] inside componentDidMount()');
}


// switchNameHandler=(newName)=>{
//   this.setState({
//     persons:[
//       {name:"mitchelMArtin",age:23},
//       {name:newName,age:24},
//       {name:"john",age:28}
//       ]
//   })
// }

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
const doesShow=this.state.showPerson;
this.setState({showPerson: !doesShow});
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

// let btnClass="";
let persons=null;

if(this.state.showPerson){
  persons=<Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
}

    // btnClass=classes.Red;

    return (
      <div className={classes.App}>
        <h3>React Component</h3>

       <button  onClick={()=>this.setState({showPerson:true})}  >Show Person</button>
       
          <Cockpit  
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.state.togglePersonsHandler}
          />

       {persons}<br/>
      </div>
    );
  }
}

export default App;
