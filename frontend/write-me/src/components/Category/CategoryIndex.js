import React from 'react';
import CategoryKeyword from "./CategoryKeyword";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const CategoryIndex = ({match}) => (
    <Router>
        <Switch>
            <Route path= {match.url} component={CategoryKeyword}/>
            <Route path= {`${match.path}/category/:categoryID/keywordID`} component={CategoryKeyword}/>
        </Switch>
    </Router>
);

export default CategoryIndex;