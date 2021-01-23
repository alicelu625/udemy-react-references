import React from 'react';
import './Person.css';

const person = (props) => { //ES6
    return (
        <div className="Person">
            {/*click paragraph will also change state*/}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/*use what we type here as the new name*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    ) 
}

export default person;