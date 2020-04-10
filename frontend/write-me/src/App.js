import React from 'react';
import HomeIndex from './components/Home/HomeIndex';

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
        </Switch>
      </Router>
  );
}

export default App;
