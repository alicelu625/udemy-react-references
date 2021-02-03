import React from 'react';
import classes from './Person.css';

//style component, CSS with selectors removed

const person = (props) => { //ES6
    //customer error - 30% chance of error for each person component
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }
    
    return (
        <div className={classes.Person}>
            {/*click paragraph will also change state*/}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/*use what we type here as the new name*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;