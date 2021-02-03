import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

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
        <CSSTransition 
          mountOnEnter 
          unmountOnExit 
          in={props.show} 
          timeout={animationTiming}
          classNames="fade-slide"
          /*can also manually define various CSS classes
          classNames = {{
              enter: '',
              enterActive: 'ModalOpen',
              exit: '',
              exitActive: 'ModalClosed',
              appear: '',
              appearActive: ''
          }}*/
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
        /* moved Transition wrapper from App.js to Modal component
        <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>*/
    );
};

export default modal;