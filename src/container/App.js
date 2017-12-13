import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
// import Person from '../components/Person/Person';
import Persons from "../components/Persons/Persons";

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
//  this.setState({
//    showPerson:true
//  })
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

    const style={
      backgroungColor:'white',
      font:"inherit",
      border:"1px solid blue",
      padding:'8px',
      cursor:'pointer'
    };
let persons=null;

    // if(this.state.showPerson){
    //   Persons=(
    //   <div className={classes.personList}>
    //     {
    //       this.state.persons.map((person,index)=>{
    //       return <Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age}
    //        key={person.id}
    //        changed={(event)=>this.nameChangeHandler(event,person.id)}
    //        >
    //       </Person>
    //       })
    //     }
    //     </div>
    //   )
    // }

if(this.state.showPerson){
  persons=<Persons
  persons={this.state.persons}
  clicked={this.deletePersonHandler}
  changed={this.nameChangeHandler}/>
}

    
    return (
      <div className={classes.App}>
        <h3>React Component</h3>
        {/* <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Toggle persons</button> */}

        {/* <button onClick={this.switchNameHandler.bind(this,"max!")}>SwitchName</button> */}
       
       <button style={style} onClick={()=>this.setState({showPerson:true})}>Show Person</button>
       
       {persons}<br/>
      </div>
    );
  }
}

export default App;
