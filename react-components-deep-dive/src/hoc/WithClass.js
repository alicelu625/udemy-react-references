import React from'react';

//HOC purpose: adding a div with a certain CSS class around any element

//const withClass = props => (
//    <div className={props.classes}> {/*property expected to get from HOC*/}
//        {props.children}
//    </div>
//);

//Alternative form of HOC
const withClass = (WrappedComponent, className) => {
    return props => ( //return functional component
        <div className={className}>
            {/*spread operator pulls out all properties inside of props object 
            & distributes them as new key-value pairs on the wrapped component*/}
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;