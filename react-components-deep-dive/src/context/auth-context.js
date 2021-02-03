import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {} //empty anonymous function
});

export default authContext;