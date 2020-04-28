import React from 'react';
import HomeIndex from './components/Home/HomeIndex';
import CategoryIndex from './components/Category/CategoryIndex';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" exact={true} component={HomeIndex}></Route>
            <Route path="/category" component={CategoryIndex}></Route>
        </Switch>
      </Router>
  );
}

export default App;
