import React from 'react';
import HomeIndex from './components/Home/HomeIndex';
import CategoryIndex from './components/Category/CategoryIndex';
import Header1 from './components/Header1';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";



function App() {
  return (
      <Router>
        <Header1 />
        <Switch>
            <Route path="/" exact={true} component={HomeIndex}></Route>
            <Route path="/category" component={CategoryIndex}></Route>
        </Switch>
      </Router>
  );
}

export default App;
