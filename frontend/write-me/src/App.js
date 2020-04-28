import React from 'react';
import HomeIndex from './pages/Home/HomeIndex';
import { Login, Register } from './pages/Users/index';
import CategoryIndex from './pages/Category/CategoryIndex';

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
            <Route path="/users/login" component={Login}></Route>
            <Route path="/users/register" component={Register}></Route>
            <Route path="/category" component={CategoryIndex}></Route>
        </Switch>
      </Router>
  );
}

export default App;
