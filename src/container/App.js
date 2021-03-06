import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit.js";
import Blog from "../container/Blog/Blog";
import {BrowserRouter,NavLink} from "react-router-dom";
import Counter from './Counter/Counter';

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


let persons=null;
let btnClass="";

if(this.state.showPerson){
  persons=<Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
            btnClass=classes.Red;
}

  
// let classes=[];

// if(this.state.persons.length<=2){
//   classes.push('red');
// }
// if(this.state.persons.length<=1){
//   classes.push('bold');
// }


    return (
      <BrowserRouter>
          <div className={classes.App}>
              <header>
                <nav>
                  <ul>
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink  to={{
                      pathname:"/new-post"
                    }}>NewPost</NavLink></li>
                  </ul>  
                </nav>  
              </header>  
                <h3>React Component</h3>
                <div className={classes.Counter}>
                <Counter />
                </div>  
              {/* <button  onClick={()=>this.setState({showPerson:true})}  >Show Person</button> */}
              <button className={btnClass} onClick={()=>this.togglePersonsHandler() }>ShowPersons</button>
              
                  <Cockpit  
                  appTitle={this.props.title}
                  showPerson={this.state.showPerson}
                  persons={this.state.persons}
                  clicked={this.state.togglePersonsHandler}
                  />

              {persons}<br/><hr/>
              <Blog/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
