import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass'; //not a component anymore, but a function
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props); //execute constructor of the Component you're extending
    console.log('[App.js] constructor');
    //can set state here (this.state = ...) if doesn't support more modern use like below
  }
  
  //initial states
  state = {
    persons: [
      {id: 'asd1', name: 'Max', age: 28},
      {id: 'asd2', name: 'Manu', age:29},
      {id: 'asd3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state; //usually return the updated state
  }

  //after rendering
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; //set true for now
  }
  
  componentDidUpdate() {
    console.log('[App.js] componendDidUpdate');
  }

  //Change name to user input
  nameChangedHandler = (event, id) => { //event - what the user entered
    const personIndex = this.state.persons.findIndex(p => { //p = person we're looking for
      return p.id === id; // return true if it is the person we're looking for
    });
    //create new JavaScript object
    const person = {
      ...this.state.persons[personIndex] //distribute properties of the object into new object
    }
    //Alternative: const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value; //update name
    //update array at position fetched
    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState((prevState, props) => {
      return {
        persons:persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  //Removes person upon click on person
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); //copys array & returns new one - update immutably
    //Alternative (ES6): const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //removes 1 element from array at index
    this.setState({persons: persons}) //update state
  }

  //Show/not show list of persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // if doesShow = true, then showPersons = false (vise versa)
    this.setState({showPersons: !doesShow});
  }

  //log in
  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() { //Reach calls this method to render something to screen
    console.log('[App.js] render');
    
    let persons = null;

    //if showPersons = true, then persons holds the JSX code
    if (this.state.showPersons) {
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />
    }

    return (
      //<WithClass classes={classes.App}>
      <Aux>
        {/*button to remove cockpit component*/}
        <button 
          onClick={() => {
            this.setState({showCockpit: false});
          }}
        >Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {/*render cockpit if showCockpit=true, else render nothing*/}
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle} //set in index.js file
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
            login={this.loginHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
      //</WithClass>
    );
  }
}

export default withClass(App, classes.App);
