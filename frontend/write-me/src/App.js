import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './actions';
import HomeIndex from './pages/Home/HomeIndex';
import { Login, Register } from './pages/Users';
import CategoryIndex from './pages/Category/CategoryIndex';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
    return (
      <Router>
        <Switch>
            <Route path="/" exact={true} component={HomeIndex}></Route>
            <Route path="/users/login" component={Login}></Route>
            <Route path="/users/register" component={Register}></Route>
            <Route path="/category" component={CategoryIndex}></Route>
            <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
}

export default App;
