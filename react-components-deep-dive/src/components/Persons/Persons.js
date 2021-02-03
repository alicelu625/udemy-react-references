import React, {PureComponent} from 'react';
import Person from './Person/Person';

//generating list of persons
class Persons extends PureComponent {
    /*static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

    //true=continue updateing, false=don't continue
    /*shouldCompareUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldCompareUpdate');
        //check if persons prop changed
        if (
            nextProps.persons !== this.props.persons || //Note: persons is an array, compares pointer
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
        ) {
            return true;
        }
        else {
            return false;
        }
    }*/

    //can be used to save the state of component before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    //code that needs to run right before the component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return( <Person
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
            );
        }); 
    }
}

export default Persons;