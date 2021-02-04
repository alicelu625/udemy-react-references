import React from 'react';
import styled from 'styled-components';
//import './Person.css';

//style component, CSS with selectors removed
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => { //ES6
    return (
        <StyledDiv>
            {/*click paragraph will also change state*/}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/*use what we type here as the new name*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
}

export default person;