import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
    enter: 400, //duration for adding the element
    exit: 1000 //duration for removing the element
};

const modal = (props) => {
/* moved Transition wrapper from App.js to Modal component
    const cssClasses = [
        'Modal',
        props.show === 'entering'
        ? 'ModalOpen'
        : props.show === 'exiting'
        ? 'ModalClosed'
        : null
    ];
*/
    return (
        <Transition 
          mountOnEnter 
          unmountOnExit 
          in={props.show} 
          timeout={animationTiming}
        >
        {state => {
            //classes array for CSS classes, use condition to add modal open/close
            const cssClasses = [
                "Modal",
                //if state is entering, then ModalOpen
                state === 'entering'
                ? 'ModalOpen'
                //else if state is exiting, then ModalClosed
                : state === 'exiting'
                ? 'ModalClosed'
                //else, null
                : null
            ];
            return (
                <div className={cssClasses.join(' ')}>
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            );
        }}
        </Transition>
        /* moved Transition wrapper from App.js to Modal component
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>*/
    );
};

export default modal;