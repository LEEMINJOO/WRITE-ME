import React from 'react';
import Home from './Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function HomeIndex() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/keywords/:id" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default HomeIndex;
