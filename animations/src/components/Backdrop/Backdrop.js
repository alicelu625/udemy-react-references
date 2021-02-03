import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    //classes array for CSS classes, use condition to add backdrop open/close
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;