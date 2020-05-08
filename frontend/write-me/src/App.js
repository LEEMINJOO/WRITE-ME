import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';

import Home from './pages/Home/Home';
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import './App.scss';

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
            <div className="topMenu">
                <span className="left"> </span>
                <Link to="/user/login"> 로그인 </Link>
                <span> | </span>
                <span> <Link to="/user/register"> 회원가입 </Link> </span>
                <span className="right"> </span>
            </div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/user/login' component={Login}/>
                <Route path='/user/Register' component={Register}/>
            </Switch>
        </Router>
    );
}

export default App;
