import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
        </BrowserRouter>
    )
}

export default Routes;
