import React from 'react';
import Home from './Home'
import KeywordToday from './KeywordToday';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const HomeIndex = ({match}) => (
    <Router>
        <Switch>
            <Route exact path={match.url} component={Home} />
            <Route path= {`${match.path}/keywords/:category`} component={KeywordToday}/>
        </Switch>
    </Router>
)

export default HomeIndex;
