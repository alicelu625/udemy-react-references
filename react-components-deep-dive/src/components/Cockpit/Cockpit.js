import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

//use React hooks for Lifecycle equivalent
const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext); //holds information about AuthContext data

  console.log(authContext.authenticated);
  
  //will run for every render cycle  
  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //can send HTTP request here
      //const timer = setTimeout(() => {
      //  alert('Saved data to cloud!'); //Example request
      //}, 1000); //Ex. execute after 1sec
      toggleBtnRef.current.click();
      return () => { //run after every render cycle (Ex.for cleanup)
        //clearTimeout(timer); //take out timer when remove cockpit
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []); //empty[] = only want to run for the 1st time
    //tells React that the effect has no dependencies (can never change, never rerun)
    //should rerun whenever one of the dependencies changes
    //Ex: [props.persons] = only run when persons change

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect')
      return () => { //run after every render cycle (Ex.for cleanup)
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    }); //should run for every update cycle

    //showing different colors based on how many ppl displayed
    const assignedClasses = []; //if all 3 elements
    
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red; //change dynamically
    }
    
    if (props.personsLength <= 2) { //2 or less elements
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.personsLength <= 1) { //1 or less elements
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            {/*join - turn array into 1 string*/}
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>Login in</button>
        </div>
    );
};

export default React.memo(cockpit); //optimize functional component