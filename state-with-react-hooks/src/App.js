import React, { useState } from 'react'; //from react library
//React - responsible for rendering
import './App.css';
import Person from './Person/Person.js';
//function to manage personsState
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [ //pass initial state
      {name: 'Max', age: 28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });
  
  const [otherState, setOtherState] = useState('some other value');
  //or: useState({otherState: 'some other value'})

  //function for something to happen upon click
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age: 27}
      ],
      //otherStates: personsState.otherState //copy over old untouched state
    });
  };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} /> {/*using state*/}
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name="Manu" age="26">My Hobbies: Racing</Person> {/*custom component*/}
    </div>
  );
}

export default app;
