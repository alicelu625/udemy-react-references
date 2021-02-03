import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

//style component, CSS with selectors removed

class Person extends Component {
    //Approach 2:
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; //allows access to context in componentDidMount()
    
    componentDidMount() {
        //Approach 1: this.inputElement.focus();
        //Approach 2:
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render() {
        console.log('[Person.js] rendering...');
        //return array of adjacent elements instead of using wrapping element
        /*return [
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
            <p key="i2">{this.props.children}</p>,
            <input 
                key="i3"
                type="text"
                onChange={this.props.changed}
                value={this.props.name}
            />
        ];*/
        
        //return using Higher Order Components (HOC)
        return (
            <Aux>
                {/*can now use this.context instead of <AuthContext.Consumer with reference to context React gives*/}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    //Approach 1: ref={(inputEl) => {this.inputElement=inputEl}}
                    //Approach 2:
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }   
}

Person.propTypes = {
    click: PropTypes.func, //pointer at a function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);