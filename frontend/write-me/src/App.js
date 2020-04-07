import React from 'react';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
        </Switch>
      </Router>
  );
}

export default App;
