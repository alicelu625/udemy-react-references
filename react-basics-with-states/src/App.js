import React, { Component } from 'react'; //from react library
//React - responsible for rendering
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age: 26}
    ]
  }
  switchNameHandler = (NewName) => {
    this.setState({
      persons: [
        {name: NewName, age: 28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age:29}, //Manu's name will change to user input
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  render() { //Reach calls this method to render something to screen
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is working</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} /> {/*using state*/}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <Person
          name="Manu"
          age="26"
          click={this.switchNameHandler}>My Hobbies: Racing</Person> {/*custom component*/}
      </div>
    );
    /*Alternative return:
    return(React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World')));*/
  }
}

export default App;
